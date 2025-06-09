<?php
/*
Plugin Name: BSwisdom Website Importer
Plugin URI: https://bswisdom.org
Description: Complete website importer for BSwisdom.org - imports all pages, styles, and functionality exactly matching the React application
Version: 1.0
Author: BSwisdom
Author URI: https://bswisdom.org
License: GPL v2 or later
*/

if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('BSWISDOM_VERSION', '1.0.0');
define('BSWISDOM_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('BSWISDOM_PLUGIN_URL', plugin_dir_url(__FILE__));

// Require core plugin classes
require_once BSWISDOM_PLUGIN_DIR . 'includes/class-bswisdom-api.php';
require_once BSWISDOM_PLUGIN_DIR . 'includes/class-bswisdom-assets.php';
require_once BSWISDOM_PLUGIN_DIR . 'includes/class-bswisdom-settings.php';
require_once BSWISDOM_PLUGIN_DIR . 'includes/class-bswisdom-templates.php';
require_once BSWISDOM_PLUGIN_DIR . 'includes/class-bswisdom-shortcodes.php';

class BSwisdom_Importer {
    private $api;
    private $assets;
    private $settings;
    private $templates;
    private $shortcodes;

    public function __construct() {
        // Initialize components
        $this->api = new BSwisdom_API();
        $this->assets = new BSwisdom_Assets(BSWISDOM_PLUGIN_URL, BSWISDOM_VERSION);
        $this->settings = new BSwisdom_Settings();
        $this->templates = new BSwisdom_Templates();
        $this->shortcodes = new BSwisdom_Shortcodes();

        // Register activation hook
        register_activation_hook(__FILE__, array($this, 'activate'));

        // Add admin menu
        add_action('admin_menu', array($this, 'add_admin_menu'));
    }

    public function activate() {
        // Create necessary pages
        $this->create_pages();
        
        // Import default content
        $this->import_default_content();
        
        // Set up default settings
        $this->setup_default_settings();
        
        // Flush rewrite rules
        flush_rewrite_rules();
    }

    private function create_pages() {
        $pages = array(
            'home' => array(
                'title' => 'Home',
                'template' => 'home-template.php'
            ),
            'about' => array(
                'title' => 'About',
                'template' => 'about-template.php'
            ),
            'services' => array(
                'title' => 'Services',
                'template' => 'services-template.php'
            ),
            'blog' => array(
                'title' => 'Blog',
                'template' => 'blog-template.php'
            ),
            'contact' => array(
                'title' => 'Contact',
                'template' => 'contact-template.php'
            ),
            'affiliate' => array(
                'title' => 'Affiliate',
                'template' => 'affiliate-template.php'
            )
        );

        foreach ($pages as $slug => $page) {
            if (!get_page_by_path($slug)) {
                wp_insert_post(array(
                    'post_title' => $page['title'],
                    'post_name' => $slug,
                    'post_status' => 'publish',
                    'post_type' => 'page',
                    'post_content' => '',
                    'page_template' => $page['template']
                ));
            }
        }
    }

    private function import_default_content() {
        // Import services
        $services = json_decode(file_get_contents(BSWISDOM_PLUGIN_DIR . 'data/services.json'), true);
        foreach ($services['services'] as $service) {
            if (!get_page_by_title($service['title'], OBJECT, 'bswisdom_service')) {
                wp_insert_post(array(
                    'post_title' => $service['title'],
                    'post_type' => 'bswisdom_service',
                    'post_status' => 'publish',
                    'post_content' => $service['description'],
                    'meta_input' => array(
                        'price' => $service['price'],
                        'features' => $service['features'],
                        'turnaround' => $service['turnaround'],
                        'rush_available' => $service['rush']['available'],
                        'rush_fee' => $service['rush']['fee'],
                        'rush_timeframe' => $service['rush']['timeframe']
                    )
                ));
            }
        }

        // Import blog posts
        $posts = json_decode(file_get_contents(BSWISDOM_PLUGIN_DIR . 'data/blog-posts.json'), true);
        foreach ($posts['posts'] as $post) {
            if (!get_page_by_title($post['title'], OBJECT, 'bswisdom_blog')) {
                wp_insert_post(array(
                    'post_title' => $post['title'],
                    'post_type' => 'bswisdom_blog',
                    'post_status' => 'publish',
                    'post_content' => $post['content'],
                    'post_excerpt' => $post['excerpt'],
                    'meta_input' => array(
                        'author_name' => $post['author']['name'],
                        'author_avatar' => $post['author']['avatar'],
                        'read_time' => $post['readTime'],
                        'social_shares' => $post['socialShares']
                    )
                ));
            }
        }
    }

    private function setup_default_settings() {
        $default_settings = array(
            'cashapp_username' => '$BSwisdom',
            'zelle_email' => 'payments@bswisdom.org',
            'zelle_phone' => '(555) 123-4567',
            'stripe_public_key' => ''
        );

        if (!get_option('bswisdom_payment_settings')) {
            update_option('bswisdom_payment_settings', $default_settings);
        }
    }

    public function add_admin_menu() {
        add_menu_page(
            'BSwisdom',
            'BSwisdom',
            'manage_options',
            'bswisdom-importer',
            array($this, 'render_admin_page'),
            'dashicons-download',
            20
        );
    }

    public function render_admin_page() {
        include BSWISDOM_PLUGIN_DIR . 'templates/admin-page.php';
    }
}

// Initialize the plugin
new BSwisdom_Importer();
<?php
/*
Plugin Name: BSwisdom Website Theme
Plugin URI: https://bswisdom.org
Description: Complete website theme for BSwisdom.org with all pages, styles, and functionality
Version: 1.0
Author: BSwisdom
Author URI: https://bswisdom.org
License: GPL v2 or later
*/

if (!defined('ABSPATH')) {
    exit;
}

// Prevent direct file access
defined('ABSPATH') || exit;

class BSwisdom_Theme {
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        add_action('after_setup_theme', array($this, 'setup_theme'));
        add_action('init', array($this, 'register_post_types'));
        add_action('init', array($this, 'register_taxonomies'));
    }

    public function init() {
        // Register menus
        register_nav_menus(array(
            'primary' => __('Primary Menu', 'bswisdom'),
            'footer' => __('Footer Menu', 'bswisdom')
        ));
    }

    public function enqueue_assets() {
        // Enqueue styles
        wp_enqueue_style(
            'bswisdom-tailwind',
            plugin_dir_url(__FILE__) . 'assets/css/tailwind.css',
            array(),
            '1.0.0'
        );

        wp_enqueue_style(
            'bswisdom-styles',
            plugin_dir_url(__FILE__) . 'assets/css/styles.css',
            array(),
            '1.0.0'
        );

        // Enqueue scripts
        wp_enqueue_script(
            'bswisdom-scripts',
            plugin_dir_url(__FILE__) . 'assets/js/scripts.js',
            array('jquery'),
            '1.0.0',
            true
        );

        // Localize script with WordPress data
        wp_localize_script('bswisdom-scripts', 'bswisdomData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('bswisdom-nonce')
        ));
    }

    public function setup_theme() {
        // Theme support
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_theme_support('custom-logo');
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption'
        ));
    }

    public function register_post_types() {
        // Register Services post type
        register_post_type('service', array(
            'labels' => array(
                'name' => __('Services', 'bswisdom'),
                'singular_name' => __('Service', 'bswisdom')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-cart',
            'show_in_rest' => true
        ));

        // Register Blog post type
        register_post_type('blog', array(
            'labels' => array(
                'name' => __('Blog Posts', 'bswisdom'),
                'singular_name' => __('Blog Post', 'bswisdom')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-welcome-write-blog',
            'show_in_rest' => true
        ));
    }

    public function register_taxonomies() {
        // Register Service Categories
        register_taxonomy('service_category', 'service', array(
            'labels' => array(
                'name' => __('Service Categories', 'bswisdom'),
                'singular_name' => __('Service Category', 'bswisdom')
            ),
            'hierarchical' => true,
            'show_in_rest' => true
        ));

        // Register Blog Categories
        register_taxonomy('blog_category', 'blog', array(
            'labels' => array(
                'name' => __('Blog Categories', 'bswisdom'),
                'singular_name' => __('Blog Category', 'bswisdom')
            ),
            'hierarchical' => true,
            'show_in_rest' => true
        ));
    }
}

// Initialize the plugin
new BSwisdom_Theme();

// Activation hook
register_activation_hook(__FILE__, 'bswisdom_theme_activate');

function bswisdom_theme_activate() {
    // Create necessary pages
    $pages = array(
        'home' => array(
            'title' => 'Home',
            'template' => 'templates/home.php'
        ),
        'about' => array(
            'title' => 'About',
            'template' => 'templates/about.php'
        ),
        'services' => array(
            'title' => 'Services',
            'template' => 'templates/services.php'
        ),
        'blog' => array(
            'title' => 'Blog',
            'template' => 'templates/blog.php'
        ),
        'contact' => array(
            'title' => 'Contact',
            'template' => 'templates/contact.php'
        ),
        'affiliate' => array(
            'title' => 'Affiliate',
            'template' => 'templates/affiliate.php'
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

    // Import default services
    bswisdom_import_default_services();
    
    // Import default blog posts
    bswisdom_import_default_blog_posts();

    // Flush rewrite rules
    flush_rewrite_rules();
}

// Import default services
function bswisdom_import_default_services() {
    $services = json_decode(file_get_contents(__DIR__ . '/data/services.json'), true);
    
    foreach ($services as $service) {
        if (!get_page_by_title($service['title'], OBJECT, 'service')) {
            wp_insert_post(array(
                'post_title' => $service['title'],
                'post_type' => 'service',
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
}

// Import default blog posts
function bswisdom_import_default_blog_posts() {
    $posts = json_decode(file_get_contents(__DIR__ . '/data/blog-posts.json'), true);
    
    foreach ($posts as $post) {
        if (!get_page_by_title($post['title'], OBJECT, 'blog')) {
            wp_insert_post(array(
                'post_title' => $post['title'],
                'post_type' => 'blog',
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
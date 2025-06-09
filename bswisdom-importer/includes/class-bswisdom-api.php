<?php
class BSwisdom_API {
    public function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
    }

    public function register_routes() {
        register_rest_route('bswisdom/v1', '/services', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_services'),
            'permission_callback' => '__return_true'
        ));

        register_rest_route('bswisdom/v1', '/blog', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_blog_posts'),
            'permission_callback' => '__return_true'
        ));

        register_rest_route('bswisdom/v1', '/contact', array(
            'methods' => 'POST',
            'callback' => array($this, 'handle_contact_form'),
            'permission_callback' => '__return_true'
        ));
    }

    public function get_services() {
        $services = get_posts(array(
            'post_type' => 'I'll help add the remaining essential components to make the WordPress plugin fully functional. Let me create the additional required files and components.

<boltArtifact id="wordpress-plugin-additional-components" title="Additional WordPress Plugin Components">
<boltAction type="file" filePath="bswisdom-importer/includes/class-bswisdom-api.php"><?php
class BSwisdom_API {
    public function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
    }

    public function register_routes() {
        register_rest_route('bswisdom/v1', '/services', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_services'),
            'permission_callback' => '__return_true'
        ));

        register_rest_route('bswisdom/v1', '/blog', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_blog_posts'),
            'permission_callback' => '__return_true'
        ));

        register_rest_route('bswisdom/v1', '/contact', array(
            'methods' => 'POST',
            'callback' => array($this, 'handle_contact_form'),
            'permission_callback' => '__return_true'
        ));
    }

    public function get_services() {
        $services = get_posts(array(
            'post_type' => 'bswisdom_service',
            'posts_per_page' => -1,
            'orderby' => 'menu_order',
            'order' => 'ASC'
        ));

        return array_map(function($service) {
            $meta = get_post_meta($service->ID);
            return array(
                'id' => $service->ID,
                'title' => $service->post_title,
                'description' => $service->post_content,
                'price' => floatval($meta['price'][0]),
                'features' => unserialize($meta['features'][0]),
                'turnaround' => $meta['turnaround'][0],
                'rush' => array(
                    'available' => boolval($meta['rush_available'][0]),
                    'fee' => floatval($meta['rush_fee'][0]),
                    'timeframe' => $meta['rush_timeframe'][0]
                )
            );
        }, $services);
    }

    public function get_blog_posts() {
        $posts = get_posts(array(
            'post_type' => 'bswisdom_blog',
            'posts_per_page' => -1,
            'orderby' => 'date',
            'order' => 'DESC'
        ));

        return array_map(function($post) {
            $meta = get_post_meta($post->ID);
            return array(
                'id' => $post->ID,
                'title' => $post->post_title,
                'content' => $post->post_content,
                'excerpt' => $post->post_excerpt,
                'author' => array(
                    'name' => $meta['author_name'][0],
                    'avatar' => $meta['author_avatar'][0]
                ),
                'readTime' => intval($meta['read_time'][0]),
                'socialShares' => intval($meta['social_shares'][0])
            );
        }, $posts);
    }

    public function handle_contact_form($request) {
        $params = $request->get_params();
        
        $to = get_option('admin_email');
        $subject = 'New Contact Form Submission';
        $body = sprintf(
            "Name: %s\nEmail: %s\nPhone: %s\nService: %s\nMessage: %s",
            $params['name'],
            $params['email'],
            $params['phone'],
            $params['service'],
            $params['message']
        );
        
        $sent = wp_mail($to, $subject, $body);
        
        return array(
            'success' => $sent,
            'message' => $sent ? 'Message sent successfully' : 'Failed to send message'
        );
    }
}
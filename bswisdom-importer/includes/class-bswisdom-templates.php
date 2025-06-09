<?php
class BSwisdom_Templates {
    public function __construct() {
        add_filter('template_include', array($this, 'override_templates'));
        add_filter('page_template', array($this, 'register_templates'));
    }

    public function override_templates($template) {
        if (is_singular('bswisdom_service')) {
            return $this->locate_template('service-single.php');
        }

        if (is_post_type_archive('bswisdom_service')) {
            return $this->locate_template('service-archive.php');
        }

        if (is_singular('bswisdom_blog')) {
            return $this->locate_template('blog-single.php');
        }

        if (is_post_type_archive('bswisdom_blog')) {
            return $this->locate_template('blog-archive.php');
        }

        return $template;
    }

    public function register_templates($page_template) {
        $templates = array(
            'home' => 'Home Template',
            'about' => 'About Template',
            'services' => 'Services Template',
            'blog' => 'Blog Template',
            'contact' => 'Contact Template',
            'affiliate' => 'Affiliate Template'
        );

        foreach ($templates as $slug => $name) {
            add_filter("theme_{$slug}_template", function() use ($slug) {
                return $this->locate_template("{$slug}-template.php");
            });
        }

        return $page_template;
    }

    private function locate_template($template) {
        $template_path = plugin_dir_path(dirname(__FILE__)) . 'templates/' . $template;
        return file_exists($template_path) ? $template_path : '';
    }
}
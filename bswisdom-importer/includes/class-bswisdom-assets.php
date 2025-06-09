<?php
class BSwisdom_Assets {
    private $plugin_url;
    private $version;

    public function __construct($plugin_url, $version) {
        $this->plugin_url = $plugin_url;
        $this->version = $version;I'll help complete the WordPress plugin by adding the remaining essential components. Let me create the additional required files and components.

<boltArtifact id="wordpress-plugin-final-components" title="Final WordPress Plugin Components">
<boltAction type="file" filePath="bswisdom-importer/includes/class-bswisdom-assets.php"><?php
class BSwisdom_Assets {
    private $plugin_url;
    private $version;

    public function __construct($plugin_url, $version) {
        $this->plugin_url = $plugin_url;
        $this->version = $version;

        add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_assets'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_assets'));
    }

    public function enqueue_frontend_assets() {
        // Enqueue React app
        wp_enqueue_script(
            'bswisdom-react',
            $this->plugin_url . 'build/js/app.js',
            array(),
            $this->version,
            true
        );

        // Enqueue Tailwind CSS
        wp_enqueue_style(
            'bswisdom-tailwind',
            $this->plugin_url . 'build/css/tailwind.css',
            array(),
            $this->version
        );

        // Enqueue custom styles
        wp_enqueue_style(
            'bswisdom-styles',
            $this->plugin_url . 'build/css/styles.css',
            array('bswisdom-tailwind'),
            $this->version
        );

        // Localize script
        wp_localize_script('bswisdom-react', 'bswisdomData', array(
            'restUrl' => rest_url('bswisdom/v1/'),
            'nonce' => wp_create_nonce('wp_rest'),
            'settings' => $this->get_frontend_settings()
        ));
    }

    public function enqueue_admin_assets($hook) {
        if (strpos($hook, 'bswisdom') === false) {
            return;
        }

        wp_enqueue_style(
            'bswisdom-admin',
            $this->plugin_url . 'build/css/admin.css',
            array(),
            $this->version
        );

        wp_enqueue_script(
            'bswisdom-admin',
            $this->plugin_url . 'build/js/admin.js',
            array('jquery'),
            $this->version,
            true
        );
    }

    private function get_frontend_settings() {
        return array(
            'payment' => get_option('bswisdom_payment_settings'),
            'siteUrl' => get_site_url(),
            'adminEmail' => get_option('admin_email')
        );
    }
}
<?php
class BSwisdom_Settings {
    public function __construct() {
        add_action('admin_menu', array($this, 'add_settings_page'));
        add_action('admin_init', array($this, 'register_settings'));
    }

    public function add_settings_page() {
        add_submenu_page(
            'bswisdom-importer',
            'Settings',
            'Settings',
            'manage_options',
            'bswisdom-settings',
            array($this, 'render_settings_page')
        );
    }

    public function register_settings() {
        register_setting('bswisdom_settings', 'bswisdom_payment_settings');
        
        add_settings_section(
            'bswisdom_payment_section',
            'Payment Settings',
            array($this, 'render_payment_section'),
            'bswisdom-settings'
        );

        add_settings_field(
            'stripe_public_key',
            'Stripe Public Key',
            array($this, 'render_text_field'),
            'bswisdom-settings',
            'bswisdom_payment_section',
            array('field' => 'stripe_public_key')
        );

        add_settings_field(
            'cashapp_username',
            'Cash App Username',
            array($this, 'render_text_field'),
            'bswisdom-settings',
            'bswisdom_payment_section',
            array('field' => 'cashapp_username')
        );

        add_settings_field(
            'zelle_email',
            'Zelle Email',
            array($this, 'render_text_field'),
            'bswisdom-settings',
            'bswisdom_payment_section',
            array('field' => 'zelle_email')
        );

        add_settings_field(
            'zelle_phone',
            'Zelle Phone',
            array($this, 'render_text_field'),
            'bswisdom-settings',
            'bswisdom_payment_section',
            array('field' => 'zelle_phone')
        );
    }

    public function render_settings_page() {
        ?>
        <div class="wrap">
            <h1>BSwisdom Settings</h1>
            <form method="post" action="options.php">
                <?php
                settings_fields('bswisdom_settings');
                do_settings_sections('bswisdom-settings');
                submit_button();
                ?>
            </form>
        </div>
        <?php
    }

    public function render_payment_section() {
        echo '<p>Configure your payment settings below.</p>';
    }

    public function render_text_field($args) {
        $options = get_option('bswisdom_payment_settings');
        $value = isset($options[$args['field']]) ? $options[$args['field']] : '';
        printf(
            '<input type="text" name="I'll help add the remaining essential components to make the WordPress plugin fully functional. Let me create the additional required files and components.

<boltArtifact id="wordpress-plugin-additional-components" title="Additional WordPress Plugin Components">
<boltAction type="file" filePath="bswisdom-importer/includes/class-bswisdom-settings.php"><?php
class BSwisdom_Settings {
    public function __construct() {
        add_action('admin_menu', array($this, 'add_settings_page'));
        add_action('admin_init', array($this, 'register_settings'));
    }

    public function add_settings_page() {
        add_submenu_page(
            'bswisdom-importer',
            'Settings',
            'Settings',
            'manage_options',
            'bswisdom-settings',
            array($this, 'render_settings_page')
        );
    }

    public function register_settings() {
        register_setting('bswisdom_settings', 'bswisdom_payment_settings');
        
        add_settings_section(
            'bswisdom_payment_section',
            'Payment Settings',
            array($this, 'render_payment_section'),
            'bswisdom-settings'
        );

        add_settings_field(
            'stripe_public_key',
            'Stripe Public Key',
            array($this, 'render_text_field'),
            'bswisdom-settings',
            'bswisdom_payment_section',
            array('field' => 'stripe_public_key')
        );

        add_settings_field(
            'cashapp_username',
            'Cash App Username',
            array($this, 'render_text_field'),
            'bswisdom-settings',
            'bswisdom_payment_section',
            array('field' => 'cashapp_username')
        );

        add_settings_field(
            'zelle_email',
            'Zelle Email',
            array($this, 'render_text_field'),
            'bswisdom-settings',
            'bswisdom_payment_section',
            array('field' => 'zelle_email')
        );

        add_settings_field(
            'zelle_phone',
            'Zelle Phone',
            array($this, 'render_text_field'),
            'bswisdom-settings',
            'bswisdom_payment_section',
            array('field' => 'zelle_phone')
        );
    }

    public function render_settings_page() {
        ?>
        <div class="wrap">
            <h1>BSwisdom Settings</h1>
            <form method="post" action="options.php">
                <?php
                settings_fields('bswisdom_settings');
                do_settings_sections('bswisdom-settings');
                submit_button();
                ?>
            </form>
        </div>
        <?php
    }

    public function render_payment_section() {
        echo '<p>Configure your payment settings below.</p>';
    }

    public function render_text_field($args) {
        $options = get_option('bswisdom_payment_settings');
        $value = isset($options[$args['field']]) ? $options[$args['field']] : '';
        printf(
            '<input type="text" name="bswisdom_payment_settings[%s]" value="%s" class="regular-text">',
            esc_attr($args['field']),
            esc_attr($value)
        );
    }
}
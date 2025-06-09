<?php
class BSwisdom_Shortcodes {
    public function __construct() {
        add_shortcode('bswisdom_services', array($this, 'render_services'));
        add_shortcode('bswisdom_blog', array($this, 'render_blog'));
        add_shortcode('bswisdom_contact', array($this, 'render_contact_form'));
    }

    public function render_services($atts) {
        $attributes = shortcode_atts(array(
            'category' => '',
            'limit' => -1
        ), $atts);

        ob_start();
        ?>
        <div class="bswisdom-services" data-category="<?php echo esc_attr($attributes['category']); ?>" data-limit="<?php echo esc_attr($attributes['limit']); ?>">
            <!-- Services will be rendered here by React -->
        </div>
        <?php
        return ob_get_clean();
    }

    public function render_blog($atts) {
        $attributes = shortcode_atts(array(
            'category' => '',
            'limit' => -1
        ), $atts);

        ob_start();
        ?>
        <div class="bswisdom-blog" data-category="<?php echo esc_attr($attributes['category']); ?>" data-limit="<?php echo esc_attr($attributes['limit']); ?>">
            <!-- Blog posts will be rendered here by React -->
        </div>
        <?php
        return ob_get_clean();
    }

    public function render_contact_form($atts) {
        ob_start();
        ?>
        <div class="bswisdom-contact-form">
            <!-- Contact form will be rendered here by React -->
        </div>
        <?php
        return ob_get_clean();
    }
}
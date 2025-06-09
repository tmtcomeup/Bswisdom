<?php
if (!defined('ABSPATH')) {
    exit;
}
?>

<div class="wrap">
    <h1>BSwisdom Website Importer</h1>
    
    <div class="card">
        <h2>Import Website</h2>
        <p>Click the button below to import the complete BSwisdom website structure, including all pages, services, and blog posts.</p>
        
        <button id="bswisdom-import" class="button button-primary">Start Import</button>
        
        <div id="import-status" style="display: none;">
            <div class="progress-bar"></div>
            <p class="status-message"></p>
        </div>
    </div>
    
    <script>
        jQuery(document).ready(function($) {
            $('#bswisdom-import').on('click', function() {
                var $button = $(this);
                var $status = $('#import-status');
                var $message = $status.find('.status-message');
                
                $button.prop('disabled', true);
                $status.show();
                $message.text('Importing...');
                
                $.ajax({
                    url: bswisdomData.restUrl + 'import',
                    method: 'POST',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-WP-Nonce', bswisdomData.nonce);
                    },
                    success: function(response) {
                        $message.text('Import completed successfully!');
                        location.reload();
                    },
                    error: function() {
                        $message.text('Import failed. Please try again.');
                        $button.prop('disabled', false);
                    }
                });
            });
        });
    </script>
</div>
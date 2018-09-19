(function($) {
  Drupal.behaviors.projectScopes = {
    toggle: {
      state: false,
      init: function($button) {
        var t = this;
        $button.click(function(e) {
          e.preventDefault();
          t.toggle($button);
        })
      },
      open: function($button) {
        $button.text(Drupal.t('Unselect all'));
        $button.parent().find('.form-checkbox').attr('checked', true);
      },
      close: function($button) {
        $button.text(Drupal.t('Select all'));
        $button.parent().find('.form-checkbox').attr('checked', false);
      },
      toggle: function($button) {
        this.state = !this.state;
        if (this.state) {
          this.open($button);
        }
        else {
          this.close($button);
        }
      }
    },
    attach: function(context, settings) {
      $(".projectscopes-widget-select-all", context).once('a').each(function() {
        var toggleObject = jQuery.extend(true, {}, Drupal.behaviors.projectScopes.toggle);
        toggleObject.init($(this));
      });
    }
  }
})(jQuery);

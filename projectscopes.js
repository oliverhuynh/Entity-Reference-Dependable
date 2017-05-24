(function($) {
  Drupal.behaviors.projectScopes = {
    toggle: {
      state: false,
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
      $(".projectscopes-widget-select-all", context).once('a').click(function(e) {
        e.preventDefault();
        Drupal.behaviors.projectScopes.toggle.toggle($(this));
      });
    }
  }
})(jQuery);

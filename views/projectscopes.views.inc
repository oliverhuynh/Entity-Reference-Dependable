<?php

/**
 * Implements hook_views_plugins().
 */
function projectscopes_views_plugins() {
  $entity_tables = array();
  $tables = views_fetch_data();
  foreach ($tables as $table_name => $table) {
    if (!empty($table['table']['entity type'])) {
      $entity_tables[] = $table_name;
    }
  }

  $plugins = array(
    'display' => array(
      'projectscopes' => array(
        'title' => t('Entity Reference Dependable Data'),
        'help' => t('Selects referenceable entities for the Entity Reference Dependable fields.'),
        'handler' => 'projectscopes_plugin_display',
        'use ajax' => TRUE,
        'use pager' => TRUE,
        'use more' => FALSE,
        'accept attachments' => FALSE,
        'theme' => 'views_view',
        // Make this plugin only available to tables that map to an entity type.
        'base' => $entity_tables,
        // Custom property, used with views_get_applicable_views() to retrieve
        // all views with a 'project scopes' display.
        'project scopes display' => TRUE,
      ),
    ),
  );
  return $plugins;
}

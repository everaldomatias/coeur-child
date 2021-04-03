<?php

/**
 * Enqueue styles
 */
add_action('wp_enqueue_scripts', 'coeur_child_enqueue_styles');
function coeur_child_enqueue_styles()
{
    wp_enqueue_style('coeur-child', get_stylesheet_uri(), array('blog'), rand(1, 99999999999), 'all');
}

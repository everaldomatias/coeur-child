<?php

/**
 * Dequeue scripts
 */

add_action( 'wp_print_scripts', 'coeur_child_dequeue_scripts', 100 );
function coeur_child_dequeue_scripts()
{
    // JavaScript
    wp_dequeue_script('coeur_js');
}

/**
 * Enqueue scripts
 */
add_action('wp_enqueue_scripts', 'coeur_child_enqueue_scripts');
function coeur_child_enqueue_scripts()
{
    // CSS
    wp_enqueue_style('coeur-child', get_stylesheet_uri(), ['blog', 'bootstrap'], rand(1, 99999999999), 'all');
    
    // JavaScript
    wp_enqueue_script('coeur-child-js', get_stylesheet_directory_uri() . "/framework/js/coeur.js", array( 'jquery' ));
}
const mix = require('laravel-mix')

mix.setPublicPath('public')

mix
  .sass('resources/assets/sass/app.sass', 'public/css')

'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/login', 'AuthController.login').as('auth.login')
Route.post('/auth/signin', 'AuthController.signin').as('auth.signin')
Route.get('/logout', 'AuthController.logout').as('auth.logout')

/**
 * Middleware Auth
 */
Route.get('/', 'DashboardController.index').as('dashboard.index').middleware(['auth'])
Route.get('/forms/:id/approve', 'DashboardController.approve').as('dashboard.approve').middleware(['auth'])
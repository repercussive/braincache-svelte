import { writable } from 'svelte/store'

export type AppScreen = 'welcome' | 'game' | 'game-end'

const appScreen = writable<AppScreen>('welcome')

export default appScreen
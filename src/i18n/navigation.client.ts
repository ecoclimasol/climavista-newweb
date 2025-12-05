'use client'; // ⬅️ On garde cette ligne pour forcer l'exécution côté client

import {createNavigation} from 'next-intl/navigation'; // ⬅️ CHANGEMENT CRITIQUE
import {routing} from './routing';

// On utilise la nouvelle fonction recommandée par la librairie
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing); // ⬅️ On utilise 'createNavigation'
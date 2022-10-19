import Router from './Router'
import './style/index.css'
import populateDB from './mock/populate'
import { useEffect } from 'react'

function App() {
  let dev = true

  useEffect(() => {
    if (dev) populateDB()
  }, [])

  return <Router />
}

export default App
// TODO: mentor: Je dois ajouter des 'options' à mon composant? (ex: afficher le champ 'search', rendre le tri par colonne possible, donner le tri par défaut à l'ouverture, etc. )

// TODO: mentor: Je dois encore changer le système de stockage
// TODO: mentor: Je vais faire le test lighthouse avec plus de données dans mon tableau (pour les 2 versions)
// TODO: mentor: Je dois faire un readme pour le package
// TODO: mentor: Nettoyer le code (découper en fcts + modularité) là où c'est encore nécessaire
// TODO: mentor: Vérifier que les problèmes qui venaient des plugin sont réglés avec la nouvelle implémentation
// TODO: mentor: Changer le style de la modale (pour répondre à l'issue d'origine de cette modale)

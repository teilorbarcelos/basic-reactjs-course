import { useEffect, useState } from 'react'
import '../../styles/repositories.scss'
import { RepositoryItem } from "../RepositoryItem"

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/teilorbarcelos/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>

        {
          repositories.length > 0 ?

            repositories.map(repository => <RepositoryItem key={repository.id} repository={repository} />)

            :

            <h2>Nenhum repositório cadastrado</h2>
        }

      </ul>
    </section>
  )
}
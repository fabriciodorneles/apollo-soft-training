import gql from 'graphql-tag';

export const USER_QUERY = gql`
{
  usuario(filter: { id: "KAZUMI" }) {
      id
      nome
      genero
      documento
      contato {
        email
        telefone
      }
      email
      cargo {
        descricao
      }
      lotacao_principal {
        id_foro
        descricao
        foro {
          municipio {
            nome
          }
        }
      }      
  }
}
`;

import './App.css';
import Dados from './Components/Dados'
import Lotacao from './Components/Lotacao'
import { Query } from 'react-apollo'
import { USER_QUERY } from './Apollo/queries'
import { Loader, EmptyState, Typography } from '@bayon/commons'

const App = () => {
  return (
    <div className="App">
      <h1>Dashboard de Usuário</h1>
      <Query query={USER_QUERY}>
        {({loading, error, data}) => {
          if(loading)return (<Loader size="medium" color="blue" label="Carregando" />)
          if(error) {
            console.log(error);
            const [message1,message2,message] = error.message.split(':');
            return (
              <EmptyState 
                icon="Fail" 
                title="Oooop! Houve um problema!"
                subtitle={(
                  <>
                    <Typography>{message1}</Typography>
                    <Typography>{message2}</Typography>
                    <Typography>{message}</Typography>
                  </>
                )}
              />
            )
          }
          return(
            <>
              <Dados usuario={data.usuario} />
              <Lotacao lotacao_principal={data.usuario.lotacao_principal} />
            </>
          )
        }}
      </Query>
    </div>
  );
}

export default App;

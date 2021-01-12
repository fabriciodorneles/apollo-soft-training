import {Typography, Input, Grid} from '@bayon/commons';


const Dados = ({id='cargo_def', nome='nome_def', genero='genero_def', documento="doc_def", telefone="fone_def", email="mail_def", cargo="cargo_def"}) => {
    return (
        <div style={{width:300, alignSelf:'center'}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>DADOS DE USUARIO</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>ID</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{id}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>NOME</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{nome}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>GÊNERO</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{genero}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>DOCUMENTO</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{documento}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>TELEFONE</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{telefone}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>EMAIL</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{email}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>CARGO</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{cargo}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dados;

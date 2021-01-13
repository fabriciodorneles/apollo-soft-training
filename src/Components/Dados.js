import {Typography, Input, Grid} from '@bayon/commons';


const Dados = ({usuario}) => {
    return (
        <div style={{width:300, alignSelf:'center'}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>DADOS DE USUARIO</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Input fullWidth name="nome" label="NOME" placeholder="nome" size="small" value={usuario.nome || ''} />                    
                </Grid>
                <Grid item xs={12}>
                    <Input fullWidth name="cargo" label="CARGO" placeholder="cargo" size="small" value={usuario?.cargo?.descricao || ''} />                    
                </Grid>
                <Grid item xs={6}>
                    <Input fullWidth name="id" label="ID" placeholder="id" size="small" value={usuario?.id || ''} />                    
                </Grid>
                <Grid item xs={6}>
                    <Input fullWidth name="documento" label="DOCUMENTO" placeholder="documento" size="small" value={usuario?.documento || ''} />                    
                </Grid>
                <Grid item xs={6}>
                    <Input fullWidth name="genero" label="GENERO" placeholder="genero" size="small" value={usuario?.genero || ''} />                    
                </Grid>
                <Grid item xs={6}>
                    <Input fullWidth name="telefone" label="TELEFONE" placeholder="telefone" size="small" value={usuario?.contato?.telefone || ''} />                    
                </Grid>
                <Grid item xs={12}>
                    <Input fullWidth name="email" label="EMAIL" placeholder="email" size="small" value={usuario?.contato?.email || ''} />                    
                </Grid>
            </Grid>
        </div>
    );
}

export default Dados;

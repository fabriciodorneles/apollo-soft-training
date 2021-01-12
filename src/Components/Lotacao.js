import {Typography, Input, Grid} from '@bayon/commons';


const Lotacao = ({idForo='idForo_def', descForo='descForo_def', municipio='municipio_def'}) => {
    return (
        <div style={{marginTop: 32, width:300, alignSelf:'center'}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>LOTACAO PRINCIPAL</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>ID DO FORO</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{idForo}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>DESCRIÇÃO FORO</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{descForo}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>MUNICIPIO FORO</Typography>                    
                </Grid>
                <Grid item xs={6}>
                    <Typography>{municipio}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Lotacao;

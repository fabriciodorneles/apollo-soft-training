import {Typography, Input, Grid} from '@bayon/commons';


const Lotacao = ({lotacao_principal}) => {
    return (
        <div style={{marginTop: 32, width:300, alignSelf:'center'}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>LOTACAO PRINCIPAL</Typography>
                </Grid>
                <Grid item xs={12}>
                <Input fullWidth name="descForo" label="DESCRIÇÃO DO FORO" placeholder="descForo" size="small" value={lotacao_principal?.descricao || ''} />
                </Grid>
                <Grid item xs={6}>
                <Input fullWidth name="idForo" label="ID DO FORO" placeholder="idForo" size="small" value={lotacao_principal?.id_foro || ''} />
                </Grid>
                <Grid item xs={6}>
                <Input fullWidth name="municipio" label="MUNICIPIO DO FORO" placeholder="municipio" size="small" value={lotacao_principal?.foro?.municipio?.nome || ''} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Lotacao;

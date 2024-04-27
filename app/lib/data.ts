import { sql } from "@vercel/postgres";
import { Usuario } from "./definitions";


export async function fetchUsuarios() {
    try {
        const data = await sql<Usuario>`SELECT * FROM usuario`

        return data.rows;
    } catch(error) {
        console.error('Error en la Base de Datos:', error);
        throw new Error('Fallo al intentar hacer fetchUsuarios.');
    }
}

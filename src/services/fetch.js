const url_base = "https://playground.4geeks.com/contact";

export const getAllUsers = async (dispatch) => {
    try {
        const response = await fetch(`${url_base}/agendas`);
        if (!response.ok) {
            throw new Error("Error al obtener los usuarios",
                response.status);
        }
        const data = await response.json();

        dispatch({
            type: 'save_usuarios',
            payload: data.agendas
        })
        return

    } catch (error) {
        console.error("ERROR", error);
        throw error;
    };

}

const createAgenda = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/jonathanc130', {
            method: 'POST'

        })
        const data = await resp.json()
        return data

    } catch (error) {
        alert(error)
    }
}

export const getAgenda = async (dispatch) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/jonathanc130/contacts')
        if (resp.ok == false) {
            const data = createAgenda()
            return data

        }
        else {

            const data = await resp.json()
            dispatch({type: 'load_contacts', payload: data.contacts})
        }
    } catch (error) {
        alert(error);
    };
}

export const deleteAgenda = async (id, dispatch) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/jonathanc130/contacts/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });  
        if (!resp.ok) {
            throw new Error(resp.status);
        }
        else{
            getAgenda(dispatch)
            alert('Vas a eliminar este contacto')
        }
    } catch (error) {
        alert(error);

    };
}

export const createContact = async (nuevoContacto, dispatch) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/jonathanc130/contacts', {
            method: 'POST', 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(nuevoContacto)
        });
        if (!resp.ok){
            throw new Error(resp.status)
        }
        else{
            getAgenda(dispatch)
        }

    } catch (error) {
    alert(error);
    }
}

export const editContact = async (id, editarContacto,  dispatch)=> {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/jonathanc130/contacts/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editarContacto)
        });
        if (!resp.ok){
            throw new Error(resp.status)
        }
        getAgenda(dispatch)
        return true;
        
    } catch (error) {
        alert(error);   
    }
}
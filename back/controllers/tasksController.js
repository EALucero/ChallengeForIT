module.exports = {
    store: async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea guardado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Error en STORE-TASK'
            })
        }
    },
    detail: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Detalle de la Tarea'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Error en TASK-DETAIL'
            })
        }
    },
    update: async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea actualizada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Error en TASK-UPDATE'
            })
        }
    },
    remove: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Tarea eliminado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Error en TASK-REMOVE'
            })
        }
    },
};
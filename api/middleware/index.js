//middleware generales


export const error404 = (req, res, next)=>{
    res.status(404).json({ msg: "no found" })
    next()
}

export const generalErrorHandle = (err , req, res ,next)=>{
    res.status(500).json({ msg: "error" });

}
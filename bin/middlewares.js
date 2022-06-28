/** errors Handler */
module.exports.errorHandler = (err, req, res, next) => {
    try {
        console.log(err)
        let status = req.app.get('env') === 'development' ? 422 : 500
        let errorMsg = ''
        if (err.errors && typeof err.errors === 'string') {
          errorMsg = err.errors
        } else if (err.errors && err.errors.length !== 0 && err.errors.length !== undefined) {
          if (typeof err.errors[0].message === 'string') {
            errorMsg = err.errors[0].message
          }
      
          if (err.errors[0].messages && typeof !err.errors[0].messages.length) {
            if (typeof err.errors[0].messages[0] === 'string') {
              errorMsg = err.errors[0].messages[0]
            } else {
              errorMsg = err.errors[0].messages[0][0]
            }
          } else if (err.errors[0].messages && typeof !err.errors[0].messages === 'string') {
            errorMsg = err.errors[0].messages
          }
        } else if (err.errors && typeof err.errors === 'object') {
          errorMsg = err.errors.message
        } else {
          errorMsg = err.message
        }
        res.status(err.status ? err.status : status).json({ status: 'fail', errors: errorMsg })
    }catch(err){
        throw err
    }
}

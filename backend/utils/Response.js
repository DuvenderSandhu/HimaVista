function Response(statusCode=404,message="Something Went Wrong",data={}){
    this.statusCode=statusCode
    this.message= message
    this.data= data
    return this
}

export default Response
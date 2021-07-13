class easyHttp{
    //GET METHOD
    get(url)
    {
       return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
       })
    }

    //POST METHOD
    post(url, data)
    {
       return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
       })
    }

    //PUT METHOD
    put(url, data)
    {
       return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
       })
    }

      //DELETE METHOD
     delete(url)
      {
         return new Promise((resolve, reject) => {
              fetch(url, {
                method: 'PUT',
                headers:{
                    'Content-type':'application/json'
                },
               
            })
              .then(response => response.json())
              .then(() => resolve('Deleted succesfully'))
              .catch(error => reject(error))
         })
      }
    

}
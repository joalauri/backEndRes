const deleteForm = document.querySelectorAll("#deleteProductForm");

deleteForm.forEach(form => {
    form.addEventListener("submit",async(e)=>{
        e.preventDefault();
        await fetch(`/api/product/${form.classList[0]}`,{
            method:"DELETE"
        })
        location.reload();
    })

})

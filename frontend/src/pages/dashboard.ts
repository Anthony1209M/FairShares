import {app} from "./app";

export const showDashboard = () =>
{
    app.innerHTML =
    `
            <header>
                <div class="bg-white w-full  p-5 text-2xl">
                    Fair
                    <span class="text-green-400">Share</span>
                </div>

            </header>

            <main class="flex min-h-screen w-full px-10 mt-10 gap-5">
                <div class="flex-1 bg-white rounded-lg"></div>
                <div class="grow bg-white rounded-lg py-5 px-5">
                  <div class="flex justify-between items-center">
                      <div>
                          <h2 class="text-2xl font-medium">DashBoard</h2>
                      </div>

                      <div class="flex gap-3">
                        <button type="button" class="expense-open px-4 py-3 bg-red-300 rounded-4xl cursor-pointer ">Add Expense</button>
                        <button type="button" class="px-4 py-3 bg-amber-300 rounded-4xl cursor-pointer">Add Expense</button>
                      </div>

                  </div>
                </div>

                
                <div class="flex-1 bg-white rounded-lg"></div>
            </main>

            <div id="container-modal" 
            class="expense-modal  flex bg-black/50 inset-0 fixed items-center justify-center">
                  
                <div class="bg-white max-w-sm py-5 px-5 rounded-lg">
                     <input type="text" placeholder="Description" class="input">

                     <div class="flex gap-3 mt-5">
                        <button type="button" class="expense-close px-7 py-3 bg-gray-400 rounded-4xl cursor-pointer ">Cancel</button>
                        <button type="button" class="px-8 py-3 bg-amber-300 rounded-4xl cursor-pointer">Add</button>
                    </div>

                  
                  </div>    

                  
            </div>
        

`

const expenseModal = document.querySelector('#container-modal');

const openModal = () =>
{
    expenseModal?.classList.add("is-open");
    expenseModal?.classList.remove("expense-modal");


};

const closeModal = () =>
{
    expenseModal?.classList.remove("is-open");
    expenseModal?.classList.add("expense-modal");

};


const toggleExpenseModal = (e: Event) =>
{
    const target = e.target as HTMLElement;
    console.log(target);

    if (target.closest(".expense-open")) {
        
       openModal();
    }

    if (target.closest(".expense-close")) {
        closeModal();
    }

    if (target === expenseModal) {
        closeModal(); // background click
    }

    
   

}



document.addEventListener("click", toggleExpenseModal);



}




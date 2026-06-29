import {app} from "./app";

export const showDashboard = () =>
{
    app.classList.remove(...app.classList);
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
                        <button type="button" class="expense-open px-4 py-3 bg-red-300 
                        rounded-4xl cursor-pointer ">Add Expense</button>
                        <button type="button" class="px-4 py-3 bg-amber-300 rounded-4xl cursor-pointer">Add Expense</button>
                      </div>

                  </div>
                </div>

                
                <div class="flex-1 bg-white rounded-lg"></div>
            </main>

            <div id="container-modal" 
                class="flex bg-black/50 inset-0 fixed items-center justify-center gap-5">
                  
                <div class="bg-white max-w-sm py-5 px-3 rounded-lg">
                   <div class="bg-white max-w-2xs py-5 px-3 rounded-lg">
                    <div>
                         
                    </div>
                      <button id="add-friends-btn" type="button" class="px-4 py-3 w-full mb-3  bg-gray-200
                       rounded-4xl cursor-pointer flex justify-between items-center">
                       <span data-id="1" class="text-sm">Add Friends</span> 
                       <ion-icon name="arrow-forward-outline" class=""></ion-icon>
                      </button>
                    <div>

                    </div>

                      
                     <div class="">
                       <input type="text" placeholder="Description" class="input">
                       <input type="number" placeholder="Total" class="input mt-3">


                        <select class="input cursor-pointer mt-3" name="option">
                            <option value="">Select a category...</option>
                            <option value="Deporte">Deporte</option>
                            <option value="Restaurante">Restaurante</option>
                        </select>


                     </div>

                     <button id="paid-by-btn" type="button" class="px-4 py-3 w-full mt-3  bg-gray-200
                       rounded-4xl cursor-pointer flex justify-between items-center">
                       <span class="text-sm ">Paid by</span> 
                       <ion-icon name="arrow-forward-outline" class=""></ion-icon>
                      </button>
                      

                      <div class="mt-5 grid grid-cols-2 gap-3">
                          <button type="button" class="expense-close px-7 py-3 bg-gray-400 rounded-4xl cursor-pointer ">Cancel</button>
                          <button type="button" class="px-8 py-3  bg-green-500 rounded-4xl cursor-pointer">Add</button>
                      </div>

                   </div>
                  </div>    

                  <div id="modal-add-friends" class="bg-white max-w-sm py-5 px-10 rounded-lg hidden ">
                    <div class="bg-white max-w-2xs rounded-lg">
                      <div>
                         
                        <h2 class="font-medium text-xl mb-4">Select friends</h2>

                        <div class="overscroll-y-contain max-h-40 overflow-auto">
                            <label class="flex items-center gap-2">
                                <input type="checkbox" name="friends" value="id">
                                sose Perez
                            </label>

                            <label class="flex items-center gap-2">
                                <input type="checkbox" name="friends" value="id">
                                sose Perez
                            </label>

                            <label class="flex items-center gap-2">
                                <input type="checkbox" name="friends" value="id">
                                sose Perez
                            </label>
                            
                            </div>

                                <button id="confirm-btn" type="button" class="px-4 py-3 w-full mt-5  bg-green-500
                                rounded-4xl cursor-pointer hover:bg-green-600">
                                Confirm
                                </button>

                                <button id="new-friend-btn" type="button" class="px-4 py-3 w-full mt-3  bg-gray-200
                                hover: hover:bg-gray-300
                                rounded-4xl cursor-pointer">
                                Add new friend
                                </button>
                        
                            </div>    
                   
                        </div> 
                  </div>

                <div id="modal-paid-by" class="bg-white max-w-sm py-5 px-10 rounded-lg hidden">
                   <div class="bg-white max-w-2xs rounded-lg">
                    <div>
                         
                    <h2 class="font-medium text-xl mb-4">Payers</h2>

                    <div class="overscroll-y-contain max-h-40 overflow-auto flex flex-col gap-3">
                        <label class="flex items-center gap-2">
                            

                            <span>Sose Perez</span>

                            <div class="flex items-center ml-3">
                                
                                <span class="bg-gray-300 px-2 py-0.2 rounded-l-md border border-gray-400 border-r-0">
                                $
                                </span>

                                <input
                                type="text"
                                name="payers"
                                value="0.00"
                                class="w-16 px-2 py-0.2 border border-gray-400 rounded-r-md text-xsoutline-none"
                                />

                            </div>
                        </label>

                    </div>
                </div>
                    

                         
                        
            </div>
        

        </div>

        <div id="new-friend-modal" class="fixed flex justify-center inset-0 bg-black/50 hidden">
              <div class="fixed top-40">
                  <div class="bg-white rounded-lg max-w-xs p-10 top-10 ">
                      <h2>Type name and email of your friend</h2>
                      <input type="text" placeholder="Nombre" class="input mt-3">
                      <input type="email" placeholder="Email" class="input mt-3">
                      <div class="mt-5 grid grid-cols-2 gap-3">
                          <button type="button" data-modal="new-friend-modal" class="px-7 py-3
                           bg-gray-400 rounded-4xl cursor-pointer cancel-btn">
                          Cancel</button>
                          <button type="button" class="px-8 py-3  bg-green-500 rounded-4xl cursor-pointer">Add</button>
                      </div>
                  </div>
              </div>

        
`

const expenseModal = document.querySelector('#container-modal');
const addFriendsBtn = document.getElementById("add-friends-btn")!;
const modalAddFriends = document.getElementById("modal-add-friends")!;

const modalPaidBy = document.getElementById("modal-paid-by")!;

const addNewFriendBtn = document.getElementById("new-friend-btn")!;
const newFriendModal = document.getElementById("new-friend-modal")!;
const confirmBtn = document.getElementById("confirm-btn")!;
const addFriendsSpan = document.querySelector("[data-id='1']")!;

const paidByBtn = document.getElementById("paid-by-btn");


let selectedFriends: string[];


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

    
   

};

const toggleModalVisibility = (modalEl: HTMLElement) =>
{
    modalEl?.classList.toggle("hidden");

};


document.addEventListener("click", toggleExpenseModal);

addFriendsBtn?.addEventListener("click", () => {
toggleModalVisibility(modalAddFriends);
if(!modalPaidBy.classList.contains("hidden"))
    {
         toggleModalVisibility(modalPaidBy);
    };
     
});

addNewFriendBtn?.addEventListener("click", () => {

    toggleModalVisibility(newFriendModal);

});

paidByBtn?.addEventListener("click", () => 
{
    
    toggleModalVisibility(modalPaidBy);

    if(!modalAddFriends.classList.contains("hidden"))
    {
         toggleModalVisibility(modalAddFriends);
    };
     
});

confirmBtn.addEventListener("click", () =>
{
    const checkedFriends = document.querySelectorAll('input[name="friends"]:checked')

    const friendsIds = Array.from(checkedFriends).map(el => (el as HTMLInputElement).value);  

    friendsIds.length > 0 ? addFriendsSpan.textContent = `${friendsIds.length} friends selected`
    : addFriendsSpan.textContent = `Add friends`;

    selectedFriends = friendsIds; 

    modalAddFriends.classList.add("hidden");
})



document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if(target.classList.contains('cancel-btn'))
    {
        const modalId = target.dataset.modal;

        const modal = document.getElementById(modalId as string) as HTMLElement;

        toggleModalVisibility(modal);
        
    }
});



}





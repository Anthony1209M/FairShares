import { createExpense, getSummaryObject } from "../api/expense";
import { createFriendship, getFriends } from "../api/friendShip";
import { userState } from "../store/user";
import type { CreateExpenseDTO } from "../types/expense";
import type { Friendship } from "../types/friendShip";
import type { User } from "../types/user";
import { errorMessage } from "../utils/errorMessages";
import {app} from "./app";



function summaryItem(label: string, amount: number): string{
  return `
    <div class="summary-item">
      <p>${label}</p>
      <span class="text-3xl font-medium">$${amount.toFixed(2)}</span>
    </div>
  `;
}

export const showDashboard = async () =>
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
                <div class="flex-1 bg-white rounded-lg py-7 px-5">
                  <h2 class="text-2xl font-medium mb-5">Friends</h2>

                  <ul id="friends-container">
                     
                  </ul>


                </div>
                <div class="grow bg-white rounded-lg py-5 px-5">
                  <div class="flex justify-between items-center">
                      <div>
                          <h2 class="text-2xl font-medium">DashBoard</h2>
                      </div>

                      <div class="flex gap-3">
                        <button type="button" class="expense-open px-4 py-3 bg-green-400 
                        rounded-4xl cursor-pointer ">Add Expense</button>
                        <button type="button" class="px-4 py-3 bg-gray-300 rounded-4xl cursor-pointer">Pay Expense</button>
                      </div>

                  </div>

                  <div id="summary-container" class="grid grid-cols-3 gap-5 mt-12">   
                    
                  </div>

                </div>

                
                <div class="flex-1 bg-white rounded-lg"></div>
            </main>

            <div id="container-modal" 
                class="flex bg-black/50 inset-0 fixed items-center justify-center gap-5 expense-modal">
                  
                <div class="bg-white max-w-sm py-5 px-3 rounded-lg relative">
                    <div id="error-message" class="absolute top-0 left-1/2 transform -translate-x-1/2 
                    border border-gray-200 text-black hidden 
                    text-sm rounded-lg px-4 py-3 max-w-3xs break-words z-9999 bg-red-100">
                    </div>
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
                            <option value="food">food</option>
                            <option value="transport">Transport</option>
                            <option value="housing">Housing</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="travel">Travel</option>
                            <option value="shopping">Shopping</option>
                            <option value="health">Health</option>
                            <option value="education">Education</option>
                            <option value="other">Other</option>
                        </select>


                     </div>

                     <button id="paid-by-btn" type="button" class="px-4 py-3 w-full mt-3  bg-gray-200
                       rounded-4xl cursor-pointer flex justify-between items-center">
                       <span class="text-sm ">Paid by</span> 
                       <ion-icon name="arrow-forward-outline" class=""></ion-icon>
                      </button>
                      

                      <div class="mt-5 grid grid-cols-2 gap-3">
                          <button type="button" class="expense-close px-7 py-3 bg-gray-400 rounded-4xl cursor-pointer ">Cancel</button>
                          <button data-action="add-expense-btn" type="button" 
                          class="px-8 py-3  bg-green-500 rounded-4xl cursor-pointer">Add</button>
                      </div>

                   </div>
                  </div>    

                  <div id="modal-add-friends" class="bg-white max-w-sm py-5 px-10 rounded-lg hidden ">
                    <div class="bg-white max-w-2xs rounded-lg">
                      <div>
                         
                        <h2 class="font-medium text-xl mb-4">Select friends</h2>

                        <div id="friends-list-container" class="overscroll-y-contain max-h-40 overflow-auto">
                           
                                
                            
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

                    
                         
                       <h2 class="font-medium text-xl mb-4">Payers</h2>

                        <div id="payers-container" 
                        class="overscroll-y-contain max-h-40 overflow-auto flex flex-col gap-3">  
                        
                            

                        </div>
                    <div>
                </div>
                    

                         
                        
            </div>
        

        </div>

        <div id="new-friend-modal" class="fixed flex justify-center inset-0 bg-black/50 hidden">
              <div class="fixed top-40">
                  <div class="bg-white rounded-lg max-w-xs p-10 top-10 ">
                      <h2>Type name and email of your friend</h2>
                      <input name="friendName" type="text" placeholder="Nombre" class="input mt-3">
                      <input name="friendEmail" type="email" placeholder="Email" class="input mt-3">
                      <div class="mt-5 grid grid-cols-2 gap-3">
                          <button type="button" data-modal="new-friend-modal" class="px-7 py-3
                           bg-gray-400 rounded-4xl cursor-pointer cancel-btn">
                          Cancel</button>
                          <button data-id="btn-1" type="button" 
                          class="px-8 py-3  bg-green-500 rounded-4xl cursor-pointer">Add</button>
                      </div>
                  </div>
              </div>

        
`



const expenseModal = document.querySelector('#container-modal');
const addFriendsBtn = document.getElementById("add-friends-btn")!;
const addNewFriendBtn = document.querySelector("[data-id='btn-1']")!;
const modalAddFriends = document.getElementById("modal-add-friends")!;

const modalPaidBy = document.getElementById("modal-paid-by")!;

const openNewFriendModal = document.getElementById("new-friend-btn")!;
const newFriendModal = document.getElementById("new-friend-modal")!;
const confirmBtn = document.getElementById("confirm-btn")!;
const addFriendsSpan = document.querySelector("[data-id='1']")!;

const paidByBtn = document.getElementById("paid-by-btn");

const listFriendsContainer = document.getElementById("friends-list-container")!;

const friendsContainer = document.getElementById("friends-container")!;

const addExpenseBtn = document.querySelector("[data-action='add-expense-btn']")!;


const state = {
    friendShips:[] as Friendship[],
    expenses: [] as CreateExpenseDTO[],
    selectedFriends: [userState.currentUser!] as User[],
};




function renderFriends()
{
    listFriendsContainer.innerHTML = state.friendShips.map(friendship =>
    `
      <label class="flex items-center gap-2">
            <input type="checkbox" name="friends" value="${friendship.friend.id}">
            <span class="friend-name">${friendship.friend.name}</span>
      </label>
    
    `
    ).join("");
    

}

function renderSelectedFriends()
{
    const payersContainer = document.getElementById("payers-container")!;


    payersContainer.innerHTML = state.selectedFriends.map(friend => 

    `
        <label class="flex items-center gap-2">
                            

           <span>${friend.name}</span>

           <div class="flex items-center ml-3">
                                
                <span class="bg-gray-300 px-2 py-0.2 rounded-l-md border border-gray-400 border-r-0">
                                $
                </span>

                <input
                    type="text"
                    name="payers"
                    value="0.00"
                    data-user-id="${friend.id}"
                    class="w-16 px-2 py-0.2 border border-gray-400 rounded-r-md text-xsoutline-none"
                    />

            </div>
        </label>
    `
    ).join("");

}


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

const renderFriendsList = async () =>
{
    state.friendShips = await getFriends();

    console.log(state.friendShips);

    friendsContainer.innerHTML = state.friendShips.map(friendship =>
        `<li class="cursor-pointer hover:bg-gray-200 p-2">${friendship.friend.name}</li>`
    ).join("");
  

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

const renderExpenseSummary = async() =>
{
    const summary = await getSummaryObject();
    const container = document.getElementById("summary-container") as HTMLDivElement;

    container.innerHTML =
    `
    ${summaryItem("Total Expenses", summary.totalExpenses)}
    ${summaryItem("You owe", summary.youOwe)}
    ${summaryItem("You are owed", summary.youAreOwed)}
    `;
}


const InitDashboard = async () =>
{
    await renderFriendsList();
    await renderExpenseSummary();

}

await InitDashboard();

document.addEventListener("click", toggleExpenseModal);

addFriendsBtn?.addEventListener("click", () => {

renderFriends();

toggleModalVisibility(modalAddFriends);
if(!modalPaidBy.classList.contains("hidden"))
    {
         toggleModalVisibility(modalPaidBy);
    };
     
});

openNewFriendModal?.addEventListener("click", () => {

    toggleModalVisibility(newFriendModal);

});

paidByBtn?.addEventListener("click", () => 
{
    renderSelectedFriends();

    toggleModalVisibility(modalPaidBy);

    if(!modalAddFriends.classList.contains("hidden"))
    {
         toggleModalVisibility(modalAddFriends);
    };
     
});

confirmBtn.addEventListener("click", () =>
{
    
    state.selectedFriends = [userState.currentUser!];
    

    const checkedFriends = document.querySelectorAll('input[name="friends"]:checked');

    const friendsIds = Array.from(checkedFriends).map(el => (el as HTMLInputElement).value);  

    state.friendShips.forEach(friendship => 
    {
        if(friendsIds.includes(friendship.friend.id))
        {
            state.selectedFriends.push(friendship.friend);
        }
    
    });

    

    friendsIds.length > 0 ? addFriendsSpan.textContent = `${friendsIds.length} friends selected`
    : addFriendsSpan.textContent = `Add friends`;

    modalAddFriends.classList.add("hidden");
});



document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if(target.classList.contains('cancel-btn'))
    {
        const modalId = target.dataset.modal;

        const modal = document.getElementById(modalId as string) as HTMLElement;

        toggleModalVisibility(modal);
        
    }
});

addExpenseBtn?.addEventListener("click", async () =>
{
    const expense = getExpenseData();
    try
    {
         await createExpense(expense);

    }
    catch(err: any)
    {
        errorMessage(err.message);
    }

   
}
);


function getExpenseData():CreateExpenseDTO 
{
    const participants = state.selectedFriends.map(friend => friend.id);
    const descriptionInput = document.querySelector<HTMLInputElement>('input[placeholder="Description"]')!;
    const totalInput = document.querySelector<HTMLInputElement>('input[placeholder="Total"]')!;
    const categorySelect = document.querySelector<HTMLSelectElement>('select[name="option"]')!;
    const splitsInputs = document.querySelectorAll<HTMLInputElement>('input[name="payers"]');   

    
    const expense: CreateExpenseDTO = 
    {
        description: descriptionInput.value,
        total: parseFloat(totalInput.value),
        category: categorySelect.value,
        participants,
        splits: Array.from(splitsInputs).map(input => 
        {
            return {
                user: input.dataset.userId as string,
                amount: parseFloat(input.value)
            };
        }),
        
    };

    console.log(expense.participants);
    

    return expense;

}

addNewFriendBtn.addEventListener("click", async () => {
    const nameInput = document.querySelector<HTMLInputElement>('input[name="friendName"]')!;
    const emailInput = document.querySelector<HTMLInputElement>('input[name="friendEmail"]')!;

    await createFriendship(nameInput.value, emailInput.value);




})


}












import './style.css'
// import typescriptLogo from './assets/typescript.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML +=
// `


// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

function togglePasswordVisibility(e: MouseEvent)
{
    const inputPass = document.querySelector<HTMLInputElement>('.input-pass');

    if(inputPass?.type === "password")
    {
        inputPass.type = "text";
    }
    else if(inputPass?.type === "text")
    {
        inputPass.type = "password";
    }
    
}

function toggleIconVisibility(e: Event)
{
    const togglePasswordBtn = document.getElementById("togglePasswordBtn");
    const input = document.querySelector<HTMLInputElement>('.input-pass')!;

    if(input.value.length > 0)
    {
        togglePasswordBtn?.classList.remove("hidden")
    }
    else
    {
        togglePasswordBtn?.classList.add("hidden")
    }
    


}


const togglePasswordBtn = document.getElementById("togglePasswordBtn");
const inputPass = document.querySelector('.input-pass');

togglePasswordBtn?.addEventListener("click", togglePasswordVisibility);

inputPass?.addEventListener("input", toggleIconVisibility);




export const showDashboard = () =>
{
    const app = document.querySelector<HTMLDivElement>('#app')!
    app.innerHTML =

    `
            <header>
                <div class="bg-white w-full  p-5">
                    Fair Share
                </div>

            </header>

            <main class="flex min-h-screen w-full px-10 mt-10 gap-5">
                <div class="flex-1 bg-white rounded-lg"></div>
                <div class="grow bg-white rounded-lg"></div>
                <div class="flex-1 bg-white rounded-lg"></div>
            </main>
        

`
}


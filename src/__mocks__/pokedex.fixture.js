/* eslint-disable no-useless-escape */
export default `<div class="flex flex-row">
<div class="w-[50%] h-[100px] bg-[#E1D999]  border border-[#5D697A] border-8 border-b-[0px]  z-10 flex flex-row px-[3%] justify-between items-center " >
    <h2 class="text-white  text-7xl" style="text-shadow: 2px 4px #6e6c61">POKEMON INFO</h2>
    <!-- <div class="w-[6%] h-[50%] bg-white border rounded-t-[40px] rounded-b-[40px] border-none  "></div> -->
</div>

</div>
<div class="w-full border border-[#5D697A] border-8 flex flex-col bg-[#FAEBD1]">
<div class="flex flex-row">
    <div class="w-[50%] bg-[#F8E9D3] h-[555px]">
        <div class="w-[100%] bg-[#C7A8EA] h-[547px] border-r-8 border-b-8 border-[#5D697A] flex flex-col justify-center content-center items-center">
            <div class="h-[80px] flex flex-row justify-between content-center items-center w-full p-4">
                <div class="text-white  text-7xl" style="text-shadow: 2px 4px #6e6c61" id="pokemon-id"></div>
                <div class="text-white  text-7xl uppercase" style="text-shadow: 2px 4px #6e6c61" id="pokemon-name"></div>
                <div class="text-white  text-7xl" style="text-shadow: 2px 4px #6e6c61" id="pokemon-weight"></div>
            </div>
            <div class="w-[96%] h-[450px] bg-white p-4 mb-4 border border-[#B694D2] border-4" style="background-image: url('./patron-gris.png')">
                <div class="w-full h-[320px]  flex flex-row px-8 justify-center content-center items-center" > <img src="" alt="" class="h-full"  id="pokemon-img"></div>
                <div class="w-full h-[100px] flex flex-row-reverse px-8"> <img src="./pngegg.png" alt="" class="h-full" id="pokeball" /></div>
            </div>
        </div>
    </div>
</div>
<div class="w-[50%] h-[100px] bg-[#5D697A]  border border-[#5D697A] border-8  z-10 flex flex-row  justify-between items-center content-center " >
<div id="pokemon-list-btns"></div>
<div>
    <button id="previous-btn" class="page-btn">Página anterior</button>
    <button id="next-btn" class="page-btn">Página siguiente</button>
</div>
</div>`;

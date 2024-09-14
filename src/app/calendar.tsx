const Calendar = () => {
    return (
        <div className="w-full font-bold">
            <div className="bg-white p-4 text-[#CC0000] text-center text-5xl rounded-xl font-[family-name:var(--font-handjet)]">
                <h2>HAPPY 2 YEARS ANNIVERSARY ♡</h2>              
            </div>
            {/** Month */}
            <div className="py-12 px-25px bg-[#CC0000] w-full mt-4 rounded-t-xl font-[family-name:var(--font-jetBrainsMono)]">
                <ul className="list-none">
                    <li className="text-center text-3xl">
                        Tháng 9 Năm 2022
                    </li>
                </ul>
            </div>

            {/** Day in week */}
            <ul className="m-auto py-2.5 bg-[#DDD] font-[family-name:var(--font-jetBrainsMono)]">
                <li className="inline-block w-13pc text-[#666] text-center">CN</li>
                <li className="inline-block w-13pc text-[#666] text-center">Thứ 2</li>
                <li className="inline-block w-13pc text-[#666] text-center">Thứ 3</li>
                <li className="inline-block w-13pc text-[#666] text-center">Thứ 4</li>
                <li className="inline-block w-13pc text-[#666] text-center">Thứ 5</li>
                <li className="inline-block w-13pc text-[#666] text-center">Thứ 6</li>
                <li className="inline-block w-13pc text-[#666] text-center">Thứ 7</li>
            </ul>

            {/** Day in month */}
            <ul className="m-auto py-2.5 bg-[#EEE] font-[family-name:var(--font-jetBrainsMono)]">
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]"></li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]"></li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]"></li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]"></li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">1</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">2</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">3</li>
            </ul>

            <ul className="m-auto py-2.5 bg-[#EEE] font-[family-name:var(--font-jetBrainsMono)]">
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">4</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">5</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">6</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">7</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">8</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">9</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">10</li>
            </ul>

            <ul className="m-auto py-2.5 bg-[#EEE] font-[family-name:var(--font-jetBrainsMono)]">
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">11</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">12</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">13</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">14</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">15</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">
                    <span className="p-2 text-[#FFFFFF] font-extrabold rounded-full bg-[url('/image/heart.png')] bg-cover bg-center">16</span>
                </li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">17</li>
            </ul>

            <ul className="m-auto py-2.5 bg-[#EEE] font-[family-name:var(--font-jetBrainsMono)]">
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">18</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">19</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">20</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">21</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">22</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">23</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">24</li>
            </ul>

            <ul className="m-auto py-2.5 bg-[#EEE] rounded-b-xl font-[family-name:var(--font-jetBrainsMono)]">
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">25</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">26</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">27</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">28</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">29</li>
                <li className="list-none inline-block w-13pc text-center mb-5px text-xs text-[#777]">30</li>
            </ul>
        </div>
    );
}

export default Calendar;
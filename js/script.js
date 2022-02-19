document.getElementById('hisab-korun').addEventListener('click', function(){
    const myName = document.getElementById('my-name').value;
    const job = document.getElementById('job').value;
    const saveMoney = document.getElementById('save-money').value;
    const salary = document.getElementById('salary').value;
    // const myName = inputValue('my-name');
    // const job = inputValue('job');




    setInnerText('set-my-name').innerText = myName;
    setInnerText('job-set').innerText = job;
    setInnerText('my-diposit-rate').innerText = saveMoney;

    setInnerText('my-income').innerText =  salary;
    setInnerText('my-expensive').innerText = totalExpensivCalculate() ;
    setInnerText('my-diposit').innerText =  diposit();
    setInnerText('curent-balance').innerText = curentBalance() ;
})

function inputValue(inputId){
    const inputName = document.getElementById(inputId);
    const inputValueText = inputName.value;
    const inputValueNumber = parseFloat(inputValueText);

    return inputValueNumber;
}
function setInnerText(setId){
    const setName = document.getElementById(setId);
    return setName;
}
function setInnerTextNumber(balanceId){
    const previousBalanceTExt = document.getElementById(balanceId);
    const previousBalanceNumber = parseFloat(previousBalanceTExt);
    return previousBalanceNumber;
}

function totalExpensivCalculate(){
    const houseVarCaNumber = inputValue('house-vara');
    const foodBillNumber = inputValue('food-bill');
    const clothBillNumber = inputValue('cloth-bill');
    const totalExpensiv = houseVarCaNumber + foodBillNumber + clothBillNumber;
    return totalExpensiv;
}

function diposit(){
    const salaryNumber = inputValue('salary');
    const saveMoneyNumber = inputValue('save-money');
    const dipositRate =  saveMoneyNumber / 100;
    const totalDiposit = salaryNumber * dipositRate;
    return totalDiposit;
}

function curentBalance(){
    const myExpensive = diposit() + totalExpensivCalculate();
    const newCurentBalance = inputValue('salary') - myExpensive;
    return newCurentBalance;
}
// setInnerTextNumber(balanceId) + saveMoneyNumber salaryNumber + 
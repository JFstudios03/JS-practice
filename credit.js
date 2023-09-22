function mtn(){
    let pg1 = prompt("Our codes have changed. For\n 1. Data plans - 312\n 2. Recharge - 311\n 3. Borrow airtime - 303\n 4. Data Bal - 323\n 5. Acct Bal - 310\n 6. JF Share - 321\n 7. VAS - 305\n 8. NIN - 996");
    
    if (pg1 == 1) {
        data();
    } else if (pg1 == 2) {
        recharge();
    } else if (pg1 == 3) {
        borrow();
    } else if (pg1 == 4) {
        dataBal();
    } else if (pg1 == 5) {
        acctBal();
    } else if (pg1 == 6) {
        jfShare();
    } else if (pg1 == 7) {
        vas();
    } else if (pg1 == 8) {
        nin();
    }
    
    function data() {
        let plans = prompt("1. Data Plans\n2. Social Bundles\n3. Business Plans\n4. Roaming/Int'l\n5. Borrow Credit/Recharge\n6. Gift Data\n7. Video Packs");

        if (plans == 1) {
            plan();
        } else if (plans == 2) {
            socBun();
        } else if (plans == 3) {
            busPlans();
        } else if (plans == 4) {
            roaming();
        } else if (plans == 5) {
            borrCredit();
        } else if (plans == 6) {
            giftPlans();
        } else if (plans == 7) {
            vidPack();
        }
    }

    function recharge(){

    }

    function borrow(){

    }

    function dataBal(){

    }

    function acctBal(){

    }

    function jfShare(){

    }

    function vas(){

    }

    function nin(){

    }

    function plan(){
        let planSel = prompt("1. Daily\n2. Weekly\n3. Monthly\n4. 2-3 Months\n5. Always on\n6. Broadband\n7. Family Packs\n8. Hot deals\n9. 5G Plans\n10. Free YouTube\n11. Manage Data\n0. Back");

        // Daily
        if (planSel == 1) {
            let daily = prompt("1. N50 for 40MB\n2. N100 for 100MB\n3. N100 for 350MB(IG/TT/YT)\n4. N200 for 200MB\n5. N300 for 1GB\n6. N700 for 3GB\n7. N500 for 2GB\n8. N500 for 2.5GB\n99. Next\n0. Back");

            if (daily == 1) {
                let dailySel = prompt("You will be charged N50 for the purchase of 40MB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 40MB daily plan was successful. Thanks for using JFS!");
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 40MB daily plan failed. Kindly try again!");
                }
            } else if (daily == 2) {
                let dailySel = prompt("You will be charged N100 for the purchase of 100MB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 100MB daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 100MB daily plan failed. Kindly try again!")
                }
            } else if (daily == 3) {
                let dailySel = prompt("You will be charged N100 for the purchase of 350MB(IG/TT/YT) Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 350MB(IG/TT/YT) daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 350MB(IG/TT/YT) daily plan failed. Kindly try again!")
                }
            } else if (daily == 4) {
                let dailySel = prompt("You will be charged N200 for the purchase of 200MB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 200MB daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 200MB daily plan failed. Kindly try again!")
                }
            } else if (daily == 5) {
                let dailySel = prompt("You will be charged N300 for the purchase of 1GB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 1GB daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 1GB daily plan failed. Kindly try again!")
                }
            } else if (daily == 6) {
                let dailySel = prompt("You will be charged N700 for the purchase of 3GB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 3GB daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 3GB daily plan failed. Kindly try again!")
                }
            } else if (daily == 7) {
                let dailySel = prompt("You will be charged N500 for the purchase of 2GB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 2GB daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 2GB daily plan failed. Kindly try again!")
                }
            } else if (daily == 8) {
                let dailySel = prompt("You will be charged N500 for the purchase of 2.5GB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 2.5GB daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 2.5GB daily plan failed. Kindly try again!")
                }
            } else if (daily == 99) {
                dailyNext();
            } else if (daily == 0) {
                plan();
            }
        } else
        
        // Weekly
        if (planSel == 2) {
            let weekly = prompt("1. N50 for 40MB\n2. N100 for 100MB\n3. N100 for 350MB(IG/TT/YT)\n4. N200 for 200MB\n5. N300 for 1GB\n6. N700 for 3GB\n7. N500 for 2GB\n8. N500 for 2.5GB\n99. Next\n0. Back");

            if (weekly == 1) {
                let weeklySel = prompt("You will be charged N50 for the purchase of 40MB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 40MB daily plan was successful. Thanks for using JFS!");
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 40MB daily plan failed. Kindly try again!");
                }
            } else if (weekly == 2) {
                let weeklySel = prompt("You will be charged N100 for the purchase of 100MB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 100MB daily plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 100MB daily plan failed. Kindly try again!")
                }
            } else if (weekly == 3) {
                let weeklySel = prompt("You will be charged N100 for the purchase of 350MB(IG/TT/YT) Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 350MB(IG/TT/YT) daily plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 350MB(IG/TT/YT) daily plan failed. Kindly try again!")
                }
            } else if (weekly == 4) {
                let weeklySel = prompt("You will be charged N200 for the purchase of 200MB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 200MB daily plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 200MB daily plan failed. Kindly try again!")
                }
            } else if (weekly == 5) {
                let weeklySel = prompt("You will be charged N300 for the purchase of 1GB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 1GB daily plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 1GB daily plan failed. Kindly try again!")
                }
            } else if (weekly == 6) {
                let weeklySel = prompt("You will be charged N700 for the purchase of 3GB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 3GB daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 3GB daily plan failed. Kindly try again!")
                }
            } else if (weekly == 7) {
                let weeklySel = prompt("You will be charged N500 for the purchase of 2GB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 2GB daily plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 2GB daily plan failed. Kindly try again!")
                }
            } else if (weekly == 8) {
                let weeklySel = prompt("You will be charged N500 for the purchase of 2.5GB Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 2.5GB daily plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 2.5GB daily plan failed. Kindly try again!")
                }
            } else if (weekly == 99) {
                weeklyNext();
            } else if (weekly == 0) {
                weeklyplan();
            }
        }
    }

    function dailyNext(){
        let daily = prompt("9. N25 for 250MB(Nightlife)\n10. N50 for 500MB(Nightlife)\n11. N300 for 750MB(3-day plan)\n12. N25 for WhatsApp Daily\n99. Next\n0. Back");

            if (daily == 9) {
                let dailySel = prompt("You will be charged N25 for the purchase of 250MB(Nightlife) Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 250MB(Nightlife) daily plan was successful. Thanks for using JFS!");
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 250MB(Nightlife) daily plan failed. Kindly try again!");
                }
            } else if (daily == 10) {
                let dailySel = prompt("You will be charged N50 for the purchase of 500MB(Nightlife) Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 500MB(Nightlife) daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 500MB(Nightlife) daily plan failed. Kindly try again!")
                }
            } else if (daily == 11) {
                let dailySel = prompt("You will be charged N300 for the purchase of 750MB 3-day plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase 750MB 3-day plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 750MB 3-day plan failed. Kindly try again!")
                }
            } else if (daily == 12) {
                let dailySel = prompt("You will be charged N25 for the purchase of WhatsApp Daily plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase WhatsApp daily plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase WhatsApp daily plan failed. Kindly try again!")
                }
            } else if (daily == 99) {
                dailyNext2();
            } else if (daily == 0) {
                plan();
            }
    }

    function dailyNext2(){
        let daily = prompt("13. N50 for Jolly Combo Offer\n14. N100 for Jolly Combo Offer\n15. N50 Betamix Mini (40MB & 2 Mins)\n16. N100 Betamix Max (100MB & 4 Mins)\n0. Back");

            if (daily == 13) {
                let dailySel = prompt("You will be charged N50 for the purchase of Jolly Combo Offer. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase Jolly Combo Offer was successful. Thanks for using JFS!");
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase Jolly Combo Offer failed. Kindly try again!");
                }
            } else if (daily == 14) {
                let dailySel = prompt("You will be charged N100 for the purchase of Jolly Combo Offer. To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase Jolly Combo Offer was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase Jolly Combo Offer failed. Kindly try again!")
                }
            } else if (daily == 15) {
                let dailySel = prompt("You will be charged N50 for the purchase of Betamix Mini (40MB & 2 Mins). To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase Betamix Mini (40MB & 2 Mins) was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase Betamix Mini (40MB & 2 Mins) failed. Kindly try again!")
                }
            } else if (daily == 16) {
                let dailySel = prompt("You will be charged N100 for the purchase of Betamix Max (100MB & 4 Mins). To proceed, select:\n1. Proceed\n2. Cancel");

                if (dailySel == 1) {
                    alert("Jello! Your request to purchase Betamix Max (100MB & 4 Mins) was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase Betamix Max (100MB & 4 Mins) failed. Kindly try again!")
                }
            } else if (daily == 0) {
                dailyNext();
            }
    }

    function socBun(){

    }

    function busPlans(){

    }

    function roaming(){

    }

    function borrCredit(){

    }

    function giftPlans(){

    }

    function vidPack(){

    }
}

function buycredit(){
    let option = prompt("To buy credit, press 1. If not, press 2");
    if (option == 1) {
        let amount = prompt("Enter amount\n\n E.g #100, #200, #300\n\n Note purchases attract a rate of 5%");

        if (amount >= 50) {
            var purchase = Number(amount) * (105 / 100);
            alert("Amount to be deducted is #" + purchase);
            let confirmPurchase = prompt("Press 1 to proceed\nPress 2 to cancel");
            
            if (confirmPurchase == 1) {
                alert("You have successfully purchased #" + amount + " credit");
            } else {
                alert("Thanks. We will love to see you again.")
            }
        }
        if (amount < 50) {
            let amount = prompt("Amount can't be less than #50");


            if (amount < 50) {
                alert("Try again with an amount greater or equal to #50")
            } else if (amount >= 50) {
                var purchase = Number(amount) * (105 / 100);
                alert("Amount to  be deducted is #" + purchase);
                let confirmPurchase = prompt("Press 1 to proceed\nPress 2 to cancel");
                
                if (confirmPurchase == 1) {
                    alert("You have successfully purchased #" + amount + " credit");
                } else {
                    alert("Thanks. We will love to see you again.")
                }
            }
        }
        
    } else if (option == 2) {
        alert("Thanks. We will love to see you again.")
    }
}

// For calculator
function calculator() {
    let a = prompt("Enter first number");
    let op = prompt("Enter Operator\n\n*  for multiplication\n/  for division\n-  for subtraction\n+  for addition");
    let b = prompt("Enter second number");
    op == "*"
    ? ans = Number(a)*Number(b)
    : op == "/"
    ? ans = Number(a)/Number(b)
    : op == "-"
    ? ans = Number(a)-Number(b)
    : op == "+"
    ? ans = Number(a)+Number(b)
    : alert("Invalid input")

    op == "*"
    ? alert(a + " * " + b + " = " +ans)
    : op == "/"
    ? alert(a + " / " + b + " = " +ans)
    : op == "-"
    ? alert(a + " - " + b + " = " +ans)
    : op == "+"
    ? alert(a + " + " + b + " = " +ans)
    : "Invalid input"
}

// For hello

function changeName(){
    let name = prompt("Input your name")

    if (name == "") {
        document.getElementById("greeting").textContent="We will love to meet you!"
    } else {
        document.getElementById("greeting").textContent=`Hello, ${name}!`
        document.getElementById("greeting-subtext").textContent="It's nice meeting you!"
    }

}
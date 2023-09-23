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
            let weekly = prompt("1. N300 for 350MB\n2. N200 for 1GB\n3. N500 for 1.5GB\n4. N500 for 750MB(14days)\n5. N500 for 1GB\n6. N1800 for 7GB\n7. N1000 for 2GB\n99. Next");

            if (weekly == 1) {
                let weeklySel = prompt("You will be charged N300 for the purchase of 350MB Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 350MB Weekly plan was successful. Thanks for using JFS!");
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 350MB Weekly plan failed. Kindly try again!");
                }
            } else if (weekly == 2) {
                let weeklySel = prompt("You will be charged N200 for the purchase of 1GB Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 1GB Weekly plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 1GB Weekly plan failed. Kindly try again!")
                }
            } else if (weekly == 3) {
                let weeklySel = prompt("You will be charged N500 for the purchase of 1.5GB Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 1.5GB Weekly plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 1.5GB Weekly plan failed. Kindly try again!")
                }
            } else if (weekly == 4) {
                let weeklySel = prompt("You will be charged N500 for the purchase of 750MB(14days) Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 750MB(14days) Weekly plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 750MB(14days) Weekly plan failed. Kindly try again!")
                }
            } else if (weekly == 5) {
                let weeklySel = prompt("You will be charged N500 for the purchase of 1GB Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 1GB Weekly plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 1GB Weekly plan failed. Kindly try again!")
                }
            } else if (weekly == 6) {
                let weeklySel = prompt("You will be charged N1800 for the purchase of 7GB Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 7GB Weekly plan was successful. Thanks for using JFS!")
                } else if (dailySel == 2) {
                    alert("Jello! Your request to purchase 7GB Weekly plan failed. Kindly try again!")
                }
            } else if (weekly == 7) {
                let weeklySel = prompt("You will be charged N1000 for the purchase of 2GB Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 2GB Weekly plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 2GB Weekly plan failed. Kindly try again!")
                }
            } else if (weekly == 99) {
                weeklyNext();
            }
        } else
        
        // Monthly
        if (planSel == 3) {
            let monthly = prompt("1. N1,000 for 1.5GB\n2. N1,200 for 2GB\n3. N1,500 for 3GB\n4. N2,000 for 4.5GB\n5. N1,500 for 5GB\n6. N2,500 for 6GB\n7. N3,500 for 12GB\n8. N3,500 for 15GB\n99. Next\n0. Back");

            if (monthly == 1) {
                let monthlySel = prompt("You will be charged N1,000 for the purchase of 1.5GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 1.5GB Monthly plan was successful. Thanks for using JFS!");
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 1.5GB Monthly plan failed. Kindly try again!");
                }
            } else if (monthly == 2) {
                let monthlySel = prompt("You will be charged N1,200 for the purchase of 2GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 2GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 2GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 3) {
                let monthlySel = prompt("You will be charged N1,500 for the purchase of 3GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 3GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 3GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 4) {
                let monthlySel = prompt("You will be charged N2,000 for the purchase of 4.5GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 4.5GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 4.5GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 5) {
                let monthlySel = prompt("You will be charged N1,500 for the purchase of 5GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 5GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 5GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 6) {
                let monthlySel = prompt("You will be charged N2,500 for the purchase of 6GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 6GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 6GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 7) {
                let monthlySel = prompt("You will be charged N3,500 for the purchase of 12GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 12GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 12GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 8) {
                let monthlySel = prompt("You will be charged N3,500 for the purchase of 15GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 15GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 15GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 99) {
                monthlyNext();
            } else if (monthly == 0) {
                plan();
            }
        }

        // 2-3 Months
        if (planSel == 4) {
            let month23 = prompt("1. N8,000 for 30GB/60Days\n2. N20,000 for 100GB/60Days\n3. N30,000 for 160GB/60Days\n4. N50,000 for 400GB/90Days\n5. N75,000 for 600GB/90Days\n0. Back");

            if (month23 == 1) {
                let month23Sel = prompt("You will be charged N8,000 for the purchase of 30GB/60Days plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (month23Sel == 1) {
                    alert("Jello! Your request to purchase 30GB/60Days plan was successful. Thanks for using JFS!");
                } else if (month23Sel == 2) {
                    alert("Jello! Your request to purchase 30GB/60Days plan failed. Kindly try again!");
                }
            } else if (month23 == 2) {
                let month23Sel = prompt("You will be charged N20,000 for the purchase of 100GB/60Days plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (month23Sel == 1) {
                    alert("Jello! Your request to purchase 100GB/60Days plan was successful. Thanks for using JFS!")
                } else if (month23Sel == 2) {
                    alert("Jello! Your request to purchase 100GB/60Days plan failed. Kindly try again!")
                }
            } else if (month23 == 3) {
                let month23Sel = prompt("You will be charged N30,000 for the purchase of 160GB/60Days plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (month23Sel == 1) {
                    alert("Jello! Your request to purchase 160GB/60Days plan was successful. Thanks for using JFS!")
                } else if (month23Sel == 2) {
                    alert("Jello! Your request to purchase 160GB/60Days plan failed. Kindly try again!")
                }
            } else if (month23 == 4) {
                let month23Sel = prompt("You will be charged N50,000 for the purchase of 400GB/90Days plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (month23Sel == 1) {
                    alert("Jello! Your request to purchase 400GB/90Days plan was successful. Thanks for using JFS!")
                } else if (month23Sel == 2) {
                    alert("Jello! Your request to purchase 400GB/90Days plan failed. Kindly try again!")
                }
            } else if (month23 == 5) {
                let month23Sel = prompt("You will be charged N75,000 for the purchase of 600GB/90Days plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (month23Sel == 1) {
                    alert("Jello! Your request to purchase 600GB/90Days plan was successful. Thanks for using JFS!")
                } else if (month23Sel == 2) {
                    alert("Jello! Your request to purchase 600GB/90Days plan failed. Kindly try again!")
                }
            } else if (month23 == 0) {
                plan();
            }
        }

        // Always on
        if (planSel == 5) {
            let alwayson = prompt("1. N60 for 200MB/24 Hrs\n2. N120 for 450MB/7Days\n3. N3,000 for 15GB/30Days\n4. N6,000 for 45GB/30Days\n0. Back\n99. MainMenu");

            if (alwayson == 1) {
                let alwaysonSel = prompt("You will be charged N60 for the purchase of 200MB/24 Hrs plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (alwaysonSel == 1) {
                    alert("Jello! Your request to purchase 200MB/24 Hrs plan was successful. Thanks for using JFS!");
                } else if (alwaysonSel == 2) {
                    alert("Jello! Your request to purchase 200MB/24 Hrs plan failed. Kindly try again!");
                }
            } else if (alwayson == 2) {
                let alwaysonSel = prompt("You will be charged N120 for the purchase of 450MB/7Days plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (alwaysonSel == 1) {
                    alert("Jello! Your request to purchase 450MB/7Days plan was successful. Thanks for using JFS!")
                } else if (alwaysonSel == 2) {
                    alert("Jello! Your request to purchase 450MB/7Days plan failed. Kindly try again!")
                }
            } else if (alwayson == 3) {
                let alwaysonSel = prompt("You will be charged N3,000 for the purchase of 15GB/30Days plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (alwaysonSel == 1) {
                    alert("Jello! Your request to purchase 15GB/30Days plan was successful. Thanks for using JFS!")
                } else if (alwaysonSel == 2) {
                    alert("Jello! Your request to purchase 15GB/30Days plan failed. Kindly try again!")
                }
            } else if (alwayson == 4) {
                let alwaysonSel = prompt("You will be charged N6,000 for the purchase of 45GB/30Days plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (alwaysonSel == 1) {
                    alert("Jello! Your request to purchase 45GB/30Days plan was successful. Thanks for using JFS!")
                } else if (alwaysonSel == 2) {
                    alert("Jello! Your request to purchase 45GB/30Days plan failed. Kindly try again!")
                }
            } else if (alwayson == 0) {
                plan();
            } else if (alwayson == 99) {
                mtn();
            }
        }

        // Broadband
        if (planSel == 6) {
            let broadband = prompt("1. Link Device\n2. Recharge Device\n3. Buy Data Bundle on Device\n4. Check Device Balance\n5. View & Unlink Device");

            if (broadband == 1) {
                let broadbandSel = prompt("Enter Device Number (e.g 080xxxxxxxx)");

                if (broadbandSel == "") {
                    alert("Jello! No input recorded.");
                } else {
                    alert(`Jello! You have successfully linked ${broadbandSel} to your JFS broadband`);
                }
            } else if (broadband == 2) {
                let broadbandSel = prompt("Input linked device number (e.g 080xxxxxxxx)");

                if (broadbandSel == "") {
                    alert("Jello! No input recorded.");
                } else {
                    let broadbandrec = prompt("Input amount from N5000");

                    if (broadbandrec == "" || broadbandrec < 5000) {
                        alert("Jello! Kindly try again with an amount from N5000");
                    } else {
                        let broadbanddataconf = prompt(`You are about to purchase N${broadbandrec} of data for ${broadbandSel}\n\nPress 1 to select\nPress 2 to cancel`);
                        if (broadbanddataconf == 1) {
                            alert(`Jello! You have successfully recharged ${broadbandSel} with N${broadbandrec}. Thanks for using JFS!`);
                        } else if (broadbanddataconf == 2) {
                            alert("Thanks for contacting JFS!");
                        }
                    }
                }
            } else if (broadband == 3) {
                let broadbandSel = prompt("Input linked device number (e.g 080xxxxxxxx)");

                if (broadbandSel == "") {
                    alert("Jello! No input recorded.");
                } else {
                    let broadbanddata = prompt("Input amount from 5GB");

                    if (broadbanddata == "" || broadbanddata < 5) {
                        alert("Jello! Kindly try again with an amount from N5000");
                    } else {
                        let broadbanddataconf = prompt(`You are about to purchase ${broadbanddata}GB of data for ${broadbandSel}\n\nPress 1 to select\nPress 2 to cancel`);
                        if (broadbanddataconf == 1) {
                            alert(`Jello! You have successfully recharged ${broadbandSel} with ${broadbanddata}GB. Thanks for using JFS!`);
                        } else if (broadbanddataconf == 2) {
                            alert("Thanks for contacting JFS!");
                        }
                    }
                }
            } else if (broadband == 4) {
                let broadbandSel = prompt("Input linked device number (e.g 080xxxxxxxx)");

                if (broadbandSel == "") {
                    alert("Jello! No input recorded.");
                } else {
                    alert("Sorry, no provision for this yet!");
                }
            } else if (broadband == 5) {
                alert("Sorry, no provision for this yet!");
            }
        }

        // Family Packs
        if (planSel == 7) {
            let famPack = prompt("1. Buy Family Pack\n2. Add New Beneficiary/Sponsor\n3. Manage Beneficiary/Sponsor\n4. Balance Enquiry\n5. Deactivate service\n6. Help\n0. Back\n99. MainMenu");

            if (famPack == 1) {
                let famPackSel = prompt("Buy Family Pack\n1. Monthly\n2. 3-Month\n3. Top-up Plans\n0. Back");

                if (famPackSel == 1) {
                    let famPackSelMon = prompt("1. N5,000 for 20GB\n2. N10,000 for 40GB\n3. N15,000 for 75GB\n4. N20,000 for 120GB\n5. N30,000 for 200GB\n0. Back");

                    if (famPackSelMon == 1) {
                        let famPackMonOpt = prompt("You will be charged N5,000 for the purchase of 20GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 20GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 20GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 2) {
                        let famPackMonOpt = prompt("You will be charged N10,000 for the purchase of 40GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 40GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 40GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 3) {
                        let famPackMonOpt = prompt("You will be charged N15,000 for the purchase of 75GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 75GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 75GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 4) {
                        let famPackMonOpt = prompt("You will be charged N20,000 for the purchase of 120GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 120GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 120GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 5) {
                        let famPackMonOpt = prompt("You will be charged N30,000 for the purchase of 200GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 200GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 200GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 0) {
                        plan();
                    }
                } else if (famPackSel == 2) {
                    let famPackSelMon = prompt("1. N50,000 for 400GB\n2. N75,000 for 600GB\n0. Back");

                    if (famPackSelMon == 1) {
                        let famPackMonOpt = prompt("You will be charged N50,000 for the purchase of 400GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 400GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 400GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 2) {
                        let famPackMonOpt = prompt("You will be charged N75,000 for the purchase of 600GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 600GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 600GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 0) {
                        plan();
                    }
                } else if (famPackSel == 3) {
                    let famPackSelMon = prompt("Top-up Plan\n1. N1,000 for 4GB\n2. N3,000 for 14GB\n0. Back");

                    if (famPackSelMon == 1) {
                        let famPackMonOpt = prompt("You will be charged N1,000 for the purchase of 4GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 4GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 4GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 2) {
                        let famPackMonOpt = prompt("You will be charged N3,000 for the purchase of 14GB Family Pack plan. To proceed, select:\n1. Proceed\n2. Cancel");

                        if (famPackMonOpt == 1) {
                            alert("Jello! Your request to purchase 14GB Family Pack plan was successful. Thanks for using JFS!")
                        } else if (famPackSel == 2) {
                            alert("Jello! Your request to purchase 14GB Family Pack plan failed. Kindly try again!")
                        }
                    } else if (famPackSelMon == 0) {
                        plan();
                    }
                }
            } else if (famPack == 2) {
                let famPackSel = prompt("1. Add New Beneficiary\n2. Allocate Family Pack\n3. Reset Family Pack\n0. Back\n99. MainMenu");

                if (famPackSel == 1) {
                    let famPackben = prompt("Enter service number to add beneficiary to your account");
                    alert(`You have added ${famPackben} as a beneficiary`);
                } else if (famPackSel == 2) {
                    alert("Service currently unavailable.");
                } else if (famPackSel == 3) {
                    alert("Service currently unavailable.");
                } else if (famPackSel == 0) {
                    plan();
                } else if (famPackSel == 99) {
                    mtn();
                }
            } else if (famPack == 3) {
                alert("Service currently unavailable.");
            } else if (famPack == 4) {
                alert("Service currently unavailable.");
            } else if (famPack == 5) {
                let famPackSel = prompt("Are you sure you want to deactivate family pack(All beneficiaries will be removed during the process)?\n1. Proceed\n0. Back\n99. MainMenu");

                if (famPackSel == 1) {
                    alert("You have successfully deactivated family pack")
                } else if (famPackSel == 0) {
                    plan();
                } else if (famPackSel == 99) {
                    mtn();
                }
            } else if (famPack == 6) {
                alert("Kindly visit our website for details")
            } else if (famPack == 99) {
                mtn();
            } else if (famPack == 0) {
                plan();
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

    function weeklyNext(){
        let weekly = prompt("8. N1,500 for 6GB\n9. N50 for WhatsApp weekly\n10. N500 for 750MB(YouTube Bundle)\n0. Back");

            if (weekly == 8) {
                let weeklySel = prompt("You will be charged N1,500 for the purchase of 6GB Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 6GB Weekly plan was successful. Thanks for using JFS!");
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 6GB Weekly plan failed. Kindly try again!");
                }
            } else if (weekly == 9) {
                let weeklySel = prompt("You will be charged N50 for the purchase of WhatsApp Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase WhatsApp Weekly plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase WhatsApp Weekly plan failed. Kindly try again!")
                }
            } else if (weekly == 10) {
                let weeklySel = prompt("You will be charged N500 for the purchase of 750MB(YouTube Bundle) Weekly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (weeklySel == 1) {
                    alert("Jello! Your request to purchase 750MB(YouTube Bundle) Weekly plan was successful. Thanks for using JFS!")
                } else if (weeklySel == 2) {
                    alert("Jello! Your request to purchase 750MB(YouTube Bundle) Weekly plan failed. Kindly try again!")
                }
            } else if (weekly == 0) {
                plan();
            }
    }

    function monthlyNext(){
        let monthly = prompt("9. N5,000 for 20GB\n10. N6,000 for 25GB\n11. N10,000 for 40GB\n12. N15,000 for 75GB\n13. N20,000 for 120GB\n14. N30,000 for 200GB\n15. N3,000 for 10GB\n0. Back");

            if (monthly == 9) {
                let monthlySel = prompt("You will be charged N5,000 for the purchase of 20GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 20GB Monthly plan was successful. Thanks for using JFS!");
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 20GB Monthly plan failed. Kindly try again!");
                }
            } else if (monthly == 10) {
                let monthlySel = prompt("You will be charged N6,000 for the purchase of 25GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 25GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 25GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 11) {
                let monthlySel = prompt("You will be charged N10,000 for the purchase of 40GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 40GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 40GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 12) {
                let dailySel = prompt("You will be charged N15,000 for the purchase of 75GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 75GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 75GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 13) {
                let dailySel = prompt("You will be charged N20,000 for the purchase of 120GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 120GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 120GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 14) {
                let dailySel = prompt("You will be charged N30,000 for the purchase of 200GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 200GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 200GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 15) {
                let dailySel = prompt("You will be charged N3,000 for the purchase of 10GB Monthly plan. To proceed, select:\n1. Proceed\n2. Cancel");

                if (monthlySel == 1) {
                    alert("Jello! Your request to purchase 10GB Monthly plan was successful. Thanks for using JFS!")
                } else if (monthlySel == 2) {
                    alert("Jello! Your request to purchase 10GB Monthly plan failed. Kindly try again!")
                }
            } else if (monthly == 0) {
                plan();
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
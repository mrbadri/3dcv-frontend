import { Box, Button, Fade, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Web3 from "web3";
import commaNumber from "comma-number";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");

    const getURL = {
        infura: "https://mainnet.infura.io/v3/a9b1826d4e1441ae8c08d2fdebff62e0",
        local: "http://127.0.0.1:7545"
    };

    // https://etherscan.io/accounts
    // const address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

    const web3 = new Web3(getURL.infura);

    // web3.eth.getBalance(address).then((res) => {
    //     console.log(web3.utils.fromWei(res, "ether"));
    // });
    return (
        <>
            <div className="center flex-col h-screen w-screen max-w-screen">
                <Stack spacing={2} justifyContent="center" dir="ltr">
                    <Box>
                        <TextField
                            label="Address"
                            sx={{
                                width: "300px",
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        />
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                height: "55px",
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onClick={() => {
                                web3.eth.getBalance(address).then((res) => {
                                    setBalance(web3.utils.fromWei(res, "ether"));
                                    console.log(web3.utils.fromWei(res, "ether"));
                                });
                            }}
                        >
                            Get Balance
                        </Button>
                    </Box>
                    <Fade in={!!balance}>
                        <Typography variant="h5" textAlign="left" color="primary">
                            {commaNumber(balance)} <Typography component={'span'} color="primary" sx={{fontWeight: 700}} variant="h5">ETH</Typography>
                        </Typography>
                    </Fade>
                </Stack>
            </div>
        </>
    );
}

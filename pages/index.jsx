import { Box, Button, Fade, Link, Slide, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Web3 from "web3";
import commaNumber from "comma-number";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [error, setError] = useState("");

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
                <Stack spacing={2} justifyContent="center" dir="ltr" sx={{}}>
                    <Link href="https://etherscan.io/accounts">Account List</Link>
                    <Stack sx={{ width: { xs: "90vw", md: "400px" }, mx: "auto" }} spacing={2}>
                        <TextField
                            label="Address"
                            fullWidth
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        />
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                height: "55px"
                            }}
                            onClick={() => {
                                setError("");

                                try {
                                    web3.eth.getBalance(address).then((res) => {
                                        setBalance(web3.utils.fromWei(res, "ether"));
                                        console.log(web3.utils.fromWei(res, "ether"));
                                    });
                                } catch (error) {
                                    console.log(error);
                                    setBalance(0);
                                    setError("Address is invalid!");
                                }
                            }}
                        >
                            Get Balance
                        </Button>
                    </Stack>
                    <Fade in={!!balance}>
                        <Slide direction="left" in={!!balance}>
                            <Typography variant="h6" textAlign="left" color="primary">
                                {commaNumber(Number.parseFloat(balance).toFixed(3))}{" "}
                                <Typography
                                    component={"span"}
                                    color="primary"
                                    sx={{ fontWeight: 700 }}
                                    variant="h6"
                                >
                                    ETH
                                </Typography>
                            </Typography>
                        </Slide>
                    </Fade>
                    <Slide direction="bottom" in={!!error}>
                        <Typography sx={{ color: "red", fontWeight: 600 }}>{error}</Typography>
                    </Slide>
                </Stack>
            </div>
        </>
    );
}

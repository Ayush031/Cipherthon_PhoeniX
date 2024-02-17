import React from 'react'
import './Navbar.css'

function Navbar() {

    const svgSide = {
        "HOME": <svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5963 32.0837H6.39624C4.5777 32.0837 3.08838 30.7274 3.08838 29.0649V7.42326C3.08838 3.60243 6.14541 1.86701 9.89223 3.57326L16.8529 6.75243C18.3579 7.43785 19.5963 9.26076 19.5963 10.8066V32.0837Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M34.4424 21.9625V27.475C34.4424 30.625 32.8747 32.0833 29.4884 32.0833H19.5962V15.1958L20.333 15.3416L27.3877 16.8146L30.5702 17.4708C32.6395 17.8937 34.3326 18.8854 34.4267 21.6854C34.4424 21.7729 34.4424 21.8604 34.4424 21.9625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.62231 13.125H14.0623" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.62231 18.9585H14.0623" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M27.3879 16.8147V21.5105C27.3879 23.3189 25.8046 24.7918 23.8606 24.7918C21.9166 24.7918 20.3333 23.3189 20.3333 21.5105V15.3418L27.3879 16.8147Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M34.427 21.6858C34.3329 23.4066 32.7965 24.792 30.9153 24.792C28.9713 24.792 27.3879 23.3191 27.3879 21.5108V16.8149L30.5704 17.4712C32.6398 17.8941 34.3329 18.8858 34.427 21.6858Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        "Community": <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.1458 22.8086C30.3061 22.1669 31.8301 22.8669 31.8301 24.0336V25.9148C31.8301 27.7669 30.1156 29.7502 28.0548 30.3336L22.5305 31.8794C21.5607 32.1565 19.9847 32.1565 19.0323 31.8794L13.5079 30.3336C11.4298 29.7502 9.73267 27.7669 9.73267 25.9148V24.019C9.73267 22.8669 11.2566 22.1669 12.3996 22.794L15.967 24.7481C17.3351 25.5211 19.0669 25.9002 20.7987 25.9002C22.5305 25.9002 24.2622 25.5211 25.6303 24.7481L29.1458 22.8086Z" fill="white" />
            <path d="M34.6009 9.4209L24.2276 3.68965C22.3573 2.65423 19.2747 2.65423 17.4044 3.68965L6.97915 9.4209C3.63683 11.2438 3.63683 15.3709 6.97915 17.2084L9.74998 18.7251L17.4044 22.9251C19.2747 23.9605 22.3573 23.9605 24.2276 22.9251L31.8301 18.7251L34.2026 17.4126V21.8751C34.2026 22.473 34.7914 22.9688 35.5014 22.9688C36.2114 22.9688 36.8002 22.473 36.8002 21.8751V14.7001C37.493 12.8188 36.7829 10.6313 34.6009 9.4209Z" fill="white" />
        </svg>,
        "Chat": < svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M17.5001 33.221C16.4938 33.221 15.5459 32.7106 14.8751 31.821L12.6876 28.9043C12.6438 28.846 12.4688 28.773 12.3959 28.7585H11.6667C5.5855 28.7585 1.823 27.1105 1.823 18.9147V11.623C1.823 5.17721 5.22091 1.7793 11.6667 1.7793H23.3334C29.7792 1.7793 33.1772 5.17721 33.1772 11.623V18.9147C33.1772 25.3605 29.7792 28.7585 23.3334 28.7585H22.6042C22.4876 28.7585 22.3855 28.8168 22.3126 28.9043L20.1251 31.821C19.4542 32.7106 18.5063 33.221 17.5001 33.221ZM11.6667 3.9668C6.44591 3.9668 4.0105 6.40221 4.0105 11.623V18.9147C4.0105 25.5064 6.27091 26.571 11.6667 26.571H12.3959C13.1397 26.571 13.9855 26.9939 14.4376 27.5918L16.6251 30.5085C17.1355 31.1793 17.8647 31.1793 18.3751 30.5085L20.5626 27.5918C21.0438 26.9501 21.8022 26.571 22.6042 26.571H23.3334C28.5542 26.571 30.9897 24.1355 30.9897 18.9147V11.623C30.9897 6.40221 28.5542 3.9668 23.3334 3.9668H11.6667Z" fill="white" />
            <path d="M11.6667 19.6144C11.3896 19.6144 11.1125 19.5123 10.8938 19.2935L7.9771 16.3769C7.55418 15.9539 7.55418 15.2539 7.9771 14.831L10.8938 11.9144C11.3167 11.4914 12.0167 11.4914 12.4396 11.9144C12.8625 12.3373 12.8625 13.0373 12.4396 13.4602L10.2958 15.604L12.4396 17.7477C12.8625 18.1706 12.8625 18.8706 12.4396 19.2935C12.2208 19.5123 11.9438 19.6144 11.6667 19.6144Z" fill="white" />
            <path d="M23.3333 19.6144C23.0562 19.6144 22.7791 19.5123 22.5604 19.2935C22.1374 18.8706 22.1374 18.1706 22.5604 17.7477L24.7041 15.604L22.5604 13.4602C22.1374 13.0373 22.1374 12.3373 22.5604 11.9144C22.9833 11.4914 23.6833 11.4914 24.1062 11.9144L27.0228 14.831C27.4458 15.2539 27.4458 15.9539 27.0228 16.3769L24.1062 19.2935C23.8874 19.5123 23.6104 19.6144 23.3333 19.6144Z" fill="white" />
            <path d="M16.0414 20.096C15.8955 20.096 15.7497 20.0667 15.6039 20.0084C15.0497 19.7751 14.7872 19.1334 15.0351 18.5647L17.9518 11.7543C18.1851 11.2001 18.8268 10.9376 19.3955 11.1855C19.9497 11.4188 20.2122 12.0605 19.9643 12.6292L17.0476 19.4397C16.8726 19.8481 16.4643 20.096 16.0414 20.096Z" fill="white" />
        </ svg>,
        "Resume": <svg svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path opacity="0.4" d="M11.6667 17.7915H21.8751" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M11.6667 23.625H18.0542" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.5834 8.74984H20.4167C23.3334 8.74984 23.3334 7.2915 23.3334 5.83317C23.3334 2.9165 21.8751 2.9165 20.4167 2.9165H14.5834C13.1251 2.9165 11.6667 2.9165 11.6667 5.83317C11.6667 8.74984 13.1251 8.74984 14.5834 8.74984Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.3333 5.8623C28.1896 6.1248 30.625 7.91855 30.625 14.5831V23.3331C30.625 29.1665 29.1667 32.0831 21.875 32.0831H13.125C5.83333 32.0831 4.375 29.1665 4.375 23.3331V14.5831C4.375 7.93314 6.81042 6.1248 11.6667 5.8623" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg >,
        "Feedback": <svg svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M32.0834 14.4665V16.5519C32.0834 18.404 31.4709 19.9644 30.3772 21.0436C29.298 22.1373 27.7376 22.7498 25.8855 22.7498V25.3894C25.8855 26.381 24.7772 26.979 23.9605 26.4248L22.5459 25.4915C22.6772 25.0394 22.7355 24.5435 22.7355 24.0185V18.0832C22.7355 15.1082 20.7522 13.1248 17.7772 13.1248H7.87507C7.67091 13.1248 7.48133 13.1394 7.29175 13.154V9.11442C7.29175 5.39567 9.77091 2.9165 13.4897 2.9165H25.8855C29.6042 2.9165 32.0834 5.39567 32.0834 9.11442" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.91675 18.0834C2.91675 15.3125 4.63758 13.4021 7.29175 13.1542C7.48133 13.1396 7.67091 13.125 7.87507 13.125H17.7772C20.7522 13.125 22.7355 15.1084 22.7355 18.0834V24.0187C22.7355 24.5437 22.6772 25.0396 22.5459 25.4916C22.0063 27.6354 20.2272 28.9771 17.7772 28.9771H13.8105L9.40633 31.9083C8.75008 32.3604 7.87507 31.8792 7.87507 31.0917V28.9771C6.38757 28.9771 5.148 28.4813 4.28758 27.6208C3.41258 26.7458 2.91675 25.5062 2.91675 24.0187" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg >
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
        },
    ]);

    return (
        <>
            <div className="h-screen">
                <div className="flex sticky h-[8vh] justify-between items-center bg-[#4F4A45]">
                    <svg className='ml-3 cursor-pointer' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 7.65625H4.375C3.77708 7.65625 3.28125 7.16042 3.28125 6.5625C3.28125 5.96458 3.77708 5.46875 4.375 5.46875H17.5C18.0979 5.46875 18.5938 5.96458 18.5938 6.5625C18.5938 7.16042 18.0979 7.65625 17.5 7.65625Z" fill="white" />
                        <path d="M17.5 14.9478H4.375C3.77708 14.9478 3.28125 14.4519 3.28125 13.854C3.28125 13.2561 3.77708 12.7603 4.375 12.7603H17.5C18.0979 12.7603 18.5938 13.2561 18.5938 13.854C18.5938 14.4519 18.0979 14.9478 17.5 14.9478Z" fill="white" />
                        <path d="M30.625 22.2397H4.375C3.77708 22.2397 3.28125 21.7439 3.28125 21.146C3.28125 20.5481 3.77708 20.0522 4.375 20.0522H30.625C31.2229 20.0522 31.7188 20.5481 31.7188 21.146C31.7188 21.7439 31.2229 22.2397 30.625 22.2397Z" fill="white" />
                        <path d="M30.625 29.5312H4.375C3.77708 29.5312 3.28125 29.0354 3.28125 28.4375C3.28125 27.8396 3.77708 27.3438 4.375 27.3438H30.625C31.2229 27.3438 31.7188 27.8396 31.7188 28.4375C31.7188 29.0354 31.2229 29.5312 30.625 29.5312Z" fill="white" />
                    </svg>
                </div>
                <div className='flex w-auto h-auto'>
                    <div className="pt-4 flex-col align-middle h-[92vh] w-[5vw] bg-[#6C5F5B] text-white text-xs">
                        {Object.keys(svgSide).map((key) => (
                            <div className='mb-5' key={key}>
                                <span className="">{svgSide[key]}</span>
                                <span className="" >{key}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
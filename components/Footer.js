import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-[24px] text-center border-t">
            <p>
                &copy; {new Date().getFullYear()} DevCharcha. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;

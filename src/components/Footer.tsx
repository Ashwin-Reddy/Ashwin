const Footer = () => {
    return (
        <footer className="px-6 py-10">
            <div className="mx-auto text-center text-xs leading-6 text-[#9BA8AB]">
                <p>
                    Built and designed by{" "}
                    <span className="text-[#CCD0CF]">Ashwin Reddy.</span>
                </p>

                <p>
                    © {new Date().getFullYear()} Ashwin. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
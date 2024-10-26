import { objSocialLinks } from '../back-end/riccardo';

export default function SocialLinks() {

    const socialData = objSocialLinks;


    return (
        <>
            <div className="flex justify-center pt-4 pb-4">
                {socialData.map((social, index) => {
                    return (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg flex items-center border border-gray-300 justify-center
                                transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
                        >
                            {social.icon}
                        </a>
                    );
                }
                )}
            </div>
        </>
    );
}
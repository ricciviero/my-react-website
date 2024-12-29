import PrivacyCard from './PrivacyCard';

const Privacy = () => {
    return (
        <div>
            <PrivacyCard
                title="Privacy Policy"
                children={<PrivacyCard />}
            />
        </div>
    )
}

export default Privacy;
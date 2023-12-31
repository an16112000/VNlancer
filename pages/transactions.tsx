import Title from "@/components/title";
import { LayOut as Section } from "@/layout";

function Transactions() {
    return(
        <Section>
            <Title value="Lịch sử giao dịch" />
        </Section>
    )
}

Transactions.requireLogin = true

export default Transactions;
import { RootState } from "@/state/store";
import { UserRole } from "@/state/user";
import { useSelector } from "react-redux";

interface Props {
    id: number,
    status: string
}

export function JobDetail(props: Props) {
    const role = useSelector((state: RootState) => state.user.role)

    switch (role) {
        case UserRole.client: {
            switch (props.status) {
                case '':
                    return
                case '':
                    return
                default:
                    return
            }
        }
        case UserRole.freelancer: {
            switch (props.status) {
                case '':
                    return
                case '':
                    return
                default:
                    return
            }
        }
        default: {
            return
        }
    }
}
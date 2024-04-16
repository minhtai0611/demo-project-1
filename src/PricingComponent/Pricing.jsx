import styled from "./Pricing.module.css";
import HeaderReplica from "../HeaderReplicaComponent/HeaderReplica";
export default function Pricing() {
    return (
        <>
            <HeaderReplica />
            <section className={styled.all}>
                <p>Pricing</p>
            </section>
            <table className={styled.p + " " + styled["gayathri-bold"] + " " + styled.table}>
                <thead>
                    <tr>
                        <th>Standard</th>
                        <th>Professional</th>
                        <th>Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa fa-check" aria-hidden="true" /> Limit access to exclusive content</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Full access to exclusive content</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Full access to exclusive & enterprise content</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-check" aria-hidden="true" /> Standard personalized recommendations, tailor to yours needs</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Professional personalized recommendations, tailor to yours needs</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Enterprise personalized recommendations, tailor to yours needs</td>
                    </tr>
                    {/* <tr>
                        <td></td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Personalized recommendations</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Highly personalized recommendations</td>
                    </tr> */}
                    {/* <tr>
                        <td></td>
                        <td></td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Dedicated account manager</td>
                    </tr> */}
                    <tr>
                        <td><i className="fa fa-check" aria-hidden="true" /> Standard customer support</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Professional customer support</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Enterprise customer support</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-check" aria-hidden="true" /> $5/month</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> $7/month</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Contact for custom pricing</td>
                    </tr>
                    <tr>
                        <td><button type="button" className={styled["gayathri-bold"]}>Choose a standard plan</button></td>
                        <td><button type="button" className={styled["gayathri-bold"]}>Choose a professional plan</button></td>
                        <td><button type="button" className={styled["gayathri-bold"]}>Contact Sales</button></td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}
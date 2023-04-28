import './stages.css'

const Stages = () => {

    return (
        <div className='stagepage'>
            <div className='stagenavtitle'>
                <p className='stagepagetitle'>TFA</p>
                <p className='stagepagetitle'>STAGES</p>
            </div>
        
            <div className='stageintroduce'>
                <div className='stagepresentation'>
                    <div className='blueline'>
                    <a href="/" className='stagelink'><p className='stagetitle'>STAGE 1 </p></a>
                    </div>
                </div>

                <div className='stagepresentation'>
                    <div className='blueline'>
                    <a href="/" className='stagelink'><p className='stagetitle'>STAGE 2 </p></a>
                    </div>
                </div>

                <div className='stagepresentation'>
                    <div className='blueline'>
                    <a href="/" className='stagelink'><p className='stagetitle'>STAGE 3 </p></a>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Stages 
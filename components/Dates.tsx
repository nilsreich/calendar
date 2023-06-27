export const Dates = () => {
  return (
    <div className="sticky top-0 z-20 bg-white no-scrollbar h-20 py-2 text-center text-xs font-medium uppercase text-neutral-400">
      <div className="mb-2 grid grid-cols-6">
        <div>MON</div>
        <div>DIE</div>
        <div>Mit</div>
        <div>don</div>
        <div>fre</div>
        <div>sam</div>
      </div>
      <div className="grid grid-cols-6 text-2xl">
        <div>
          <div className="bg-blue-500 rounded-full text-white rounded-full inline-flex items-center px-2 aspect-square">
            24
          </div>
        </div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
      </div>
    </div>
  );
};
